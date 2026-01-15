---
title: "활용: AI"
order: 53
---


### 이미지 분류

```python
from tensorflow.keras.applications import ResNet50
model = ResNet50(weights='imagenet')
predictions = model.predict(img_array)
```

### 실무
- Netflix: 영화 추천
- Tesla: 자율주행
- 병원: 질병 진단
