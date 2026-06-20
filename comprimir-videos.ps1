# ============================================================
#  Compresor de videos para los heroes — Lawyers Seguros
# ============================================================
#  Uso:
#   1. Descarga los videos originales y ponlos en  public/videos/_raw/
#      con el nombre final exacto (servicios.mp4, industrias.mp4, etc.).
#   2. Abre PowerShell en la carpeta Lawyers_Web y ejecuta:
#         ./comprimir-videos.ps1
#   3. Los videos optimizados (+ su poster .jpg) quedan en public/videos/.
#
#  Parametros opcionales:
#   -Duracion 12   -> segundos a conservar desde el inicio (por defecto 12)
#   -Inicio   0    -> segundo donde empieza el recorte (por defecto 0)
#   -Crf      28   -> calidad: 23=mejor/mas pesado, 30=mas liviano (por defecto 28)
#   -Ancho    1920 -> ancho en px, alto se ajusta solo (por defecto 1920)
# ============================================================

param(
  [int]$Duracion = 12,
  [int]$Inicio   = 0,
  [int]$Crf      = 28,
  [int]$Ancho    = 1920
)

$ErrorActionPreference = "Stop"

# Verifica ffmpeg
if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
  Write-Host "ERROR: ffmpeg no esta instalado. Ejecuta:  winget install --id Gyan.FFmpeg -e" -ForegroundColor Red
  exit 1
}

$raiz   = $PSScriptRoot
$origen = Join-Path $raiz "public\videos\_raw"
$salida = Join-Path $raiz "public\videos"

if (-not (Test-Path $origen)) {
  New-Item -ItemType Directory -Path $origen | Out-Null
  Write-Host "Cree la carpeta _raw. Pon ahi los videos originales y vuelve a ejecutar el script." -ForegroundColor Yellow
  exit 0
}

$videos = Get-ChildItem -Path $origen -Filter *.mp4
if ($videos.Count -eq 0) {
  Write-Host "No hay videos .mp4 en $origen" -ForegroundColor Yellow
  exit 0
}

foreach ($v in $videos) {
  $destino = Join-Path $salida $v.Name
  $poster  = Join-Path $salida ([IO.Path]::ChangeExtension($v.Name, ".jpg"))
  $pesoIn  = [math]::Round($v.Length / 1MB, 1)

  Write-Host "`n--> Procesando $($v.Name)  ($pesoIn MB)..." -ForegroundColor Cyan

  # Compresion: H.264, sin audio, escalado, fps 30, optimizado para streaming web
  ffmpeg -y -ss $Inicio -i $v.FullName -t $Duracion `
    -vf "scale=$($Ancho):-2,fps=30" `
    -c:v libx264 -crf $Crf -preset slow -pix_fmt yuv420p `
    -movflags +faststart -an `
    $destino

  # Poster: primer frame (en el segundo 1) como imagen de respaldo
  ffmpeg -y -ss 1 -i $destino -frames:v 1 -q:v 3 $poster

  $pesoOut = [math]::Round((Get-Item $destino).Length / 1MB, 1)
  Write-Host "    OK -> $($v.Name)  ($pesoOut MB)  + poster generado" -ForegroundColor Green
}

Write-Host "`nListo. Videos optimizados en public/videos/." -ForegroundColor Green
