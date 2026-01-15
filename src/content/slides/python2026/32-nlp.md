---
title: "자연어 처리"
order: 46
---


### Hugging Face

```python
from transformers import pipeline

classifier = pipeline("sentiment-analysis")
result = classifier("I love Python!")
# [{'label': 'POSITIVE', 'score': 0.9998}]
```

**NLTK, spaCy** - 전통적 NLP
