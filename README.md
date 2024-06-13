# Repro for issue 7320

## Versions

firebase-tools: 13.11.2<br>
platfrom: macOS Sonoma 14.5

## Steps to reproduce

1. Run `firebase deploy --project PROJECT_ID`
2. Open "https://PROJECT_ID.web.app/?title=HomePage"
   - Site shows "HomePage" string
