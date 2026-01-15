---
title: "활용: 데이터 분석"
order: 52
---


### 주식 데이터

```python
import yfinance as yf
stock = yf.download('AAPL', start='2020-01-01')
stock['MA_20'] = stock['Close'].rolling(20).mean()
```

### 실무 예시
- 금융: 리스크 분석
- 마케팅: A/B 테스트
- 영업: 판매 예측
