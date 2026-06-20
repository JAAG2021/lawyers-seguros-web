# comprimir-imagenes.ps1
# Comprime y renombra las imagenes de tarjetas al slug que espera el codigo.
#
# Uso:
#   .\comprimir-imagenes.ps1                    # comprime todo (omite las que ya existen)
#   .\comprimir-imagenes.ps1 -Ancho 1200        # ancho maximo 1200 px
#   .\comprimir-imagenes.ps1 -Calidad 6         # calidad ffmpeg mas baja (mas compresion)
#   .\comprimir-imagenes.ps1 -SobreEscribir     # recomprime aunque el archivo ya exista
#   .\comprimir-imagenes.ps1 -SoloSimular       # muestra que haria sin crear archivos

param(
    [int]$Ancho = 800,
    [int]$Calidad = 4,
    [switch]$SobreEscribir,
    [switch]$SoloSimular
)

$ffmpeg = "C:\Users\jalva\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1.1-full_build\bin\ffmpeg.exe"
$baseImagenes = "C:\Users\jalva\Documents\PRESENTACIONES_MARKETING_AUTOMATIZACION\Proyecto_Lawyers Seguros\Lawyers_Web\public\images"

# Pares [carpeta-origen, carpeta-destino]
# industrias: origen y destino son la misma carpeta (compresion en sitio)
# productos:  origen incluye subcarpetas, destino es la raiz plana de productos
$mapa = @(
    @{ Origen = "industrias"; Destino = "industrias" },
    @{ Origen = "productos";  Destino = "productos"  }
)

# Replica exacta de slugify() en src/lib/utils.ts
function Slugify([string]$s) {
    $s = $s.ToLower()
    $s = $s -replace [char]0x00E1, 'a'   # a con tilde
    $s = $s -replace [char]0x00E9, 'e'   # e con tilde
    $s = $s -replace [char]0x00ED, 'i'   # i con tilde
    $s = $s -replace [char]0x00F3, 'o'   # o con tilde
    $s = $s -replace [char]0x00FA, 'u'   # u con tilde
    $s = $s -replace [char]0x00F1, 'n'   # enie
    $s = $s -replace [char]0x00FC, 'u'   # u con dieresis
    $s = $s -replace '[^a-z0-9]+', '-'
    $s = $s.Trim('-')
    return $s
}

if (-not (Test-Path $ffmpeg)) {
    Write-Host "ERROR: No se encontro ffmpeg en: $ffmpeg" -ForegroundColor Red
    exit 1
}

if ($SoloSimular) {
    Write-Host "MODO SIMULACION - no se creara ningun archivo" -ForegroundColor Yellow
    Write-Host ""
}

$total = 0; $ok = 0; $omitidos = 0; $errores = 0

foreach ($entrada in $mapa) {
    $carpetaOrigen  = Join-Path $baseImagenes $entrada.Origen
    $carpetaDestino = Join-Path $baseImagenes $entrada.Destino

    Write-Host ""
    Write-Host ("-- " + $entrada.Origen.ToUpper() + " " + ("-" * 40)) -ForegroundColor Magenta

    $archivos = Get-ChildItem -Recurse -File $carpetaOrigen -Include "*.jpg","*.jpeg","*.png"

    foreach ($img in $archivos) {
        $slug   = Slugify $img.BaseName
        $salida = Join-Path $carpetaDestino "$slug.jpg"

        # Determinar si este archivo ya es el resultado final procesado:
        # - Esta en la carpeta destino (no en subcarpeta)
        # - Su nombre ya es exactamente el slug (comparacion sensible a mayusculas)
        $estaEnDestino    = ($img.DirectoryName -ceq $carpetaDestino)
        $yaEstaSlugificado = $estaEnDestino -and ($img.BaseName -ceq $slug)

        if ($yaEstaSlugificado -and -not $SobreEscribir) {
            # Ya fue procesado en una ejecucion anterior, omitir en silencio
            continue
        }

        # Para archivos en subcarpetas (productos): omitir si el destino plano ya existe
        if (-not $estaEnDestino -and (Test-Path $salida) -and -not $SobreEscribir) {
            $total++
            $relOrig = $img.FullName.Replace($baseImagenes + "\", "")
            Write-Host ("  [OMITIDO] " + $relOrig) -ForegroundColor DarkGray
            Write-Host ("            -> " + $slug + ".jpg (ya existe en destino)") -ForegroundColor DarkGray
            $omitidos++
            continue
        }

        $total++
        $relOrig = $img.FullName.Replace($baseImagenes + "\", "")
        $tamOrig = [math]::Round($img.Length / 1KB, 1)

        Write-Host ("  Origen  : " + $relOrig + "  (" + $tamOrig + " KB)") -ForegroundColor Cyan
        Write-Host ("  Destino : " + $entrada.Destino + "\" + $slug + ".jpg") -ForegroundColor Cyan

        if (-not $SoloSimular) {
            # scale='min(Ancho,iw)':-1 -> reduce si es mas ancho que $Ancho, mantiene aspecto
            & $ffmpeg -i $img.FullName -vf "scale='min($Ancho,iw)':-1" -q:v $Calidad -y $salida 2>$null

            if ($LASTEXITCODE -eq 0 -and (Test-Path $salida)) {
                $tamNuevo = [math]::Round((Get-Item $salida).Length / 1KB, 1)
                $ahorro   = [math]::Round(100 - ($tamNuevo / $tamOrig * 100), 0)
                Write-Host ("  Resultado: " + $tamOrig + " KB -> " + $tamNuevo + " KB  (ahorro: " + $ahorro + "%)") -ForegroundColor Green
                $ok++
            } else {
                Write-Host "  ERROR al procesar" -ForegroundColor Red
                $errores++
            }
        } else {
            Write-Host "  [simulacion]" -ForegroundColor Yellow
            $ok++
        }

        Write-Host ""
    }
}

Write-Host ""
Write-Host ("=" * 48) -ForegroundColor Magenta
Write-Host "Resumen:" -ForegroundColor Yellow
Write-Host ("  Procesadas : " + $ok)       -ForegroundColor Green
Write-Host ("  Omitidas   : " + $omitidos) -ForegroundColor DarkGray
if ($errores -gt 0) {
    Write-Host ("  Errores    : " + $errores) -ForegroundColor Red
}
Write-Host ("  Total      : " + ($ok + $omitidos)) -ForegroundColor Yellow

if ($ok -gt 0 -and -not $SoloSimular) {
    Write-Host ""
    Write-Host "Imagenes listas en:" -ForegroundColor Cyan
    Write-Host ("  " + $baseImagenes + "\industrias\") -ForegroundColor Cyan
    Write-Host ("  " + $baseImagenes + "\productos\")  -ForegroundColor Cyan
}
