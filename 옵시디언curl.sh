# 마크다운 저장 (JSON)
curl -X POST https://obsi.solostack.agency/idea \
  -H "Content-Type: application/json" \
  -d '{"content": "# 테스트\n내용입니다", "title": "테스트노트"}'