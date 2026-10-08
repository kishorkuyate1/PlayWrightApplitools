# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC001Login.spec.ts >> App Tools >> Login With Valid User @p0
- Location: src\tests\TC001Login.spec.ts:19:5

# Error details

```
Error: locator.fill: SyntaxError: Failed to execute 'querySelectorAll' on 'Document': '["#username"]' is not a valid selector.
    at query (<anonymous>:5720:41)
    at <anonymous>:5730:7
    at SelectorEvaluatorImpl._cached (<anonymous>:5507:20)
    at SelectorEvaluatorImpl._queryCSS (<anonymous>:5717:17)
    at SelectorEvaluatorImpl._querySimple (<anonymous>:5597:19)
    at <anonymous>:5545:29
    at SelectorEvaluatorImpl._cached (<anonymous>:5507:20)
    at SelectorEvaluatorImpl.query (<anonymous>:5538:19)
    at Object.query (<anonymous>:5752:44)
    at <anonymous>:5710:21
Call log:
  - waiting for locator('["#username"]')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - link [ref=e5] [cursor=pointer]:
    - /url: index.html
  - heading "Login Form" [level=4] [ref=e6]
  - generic [ref=e7]:
    - generic [ref=e8]:
      - generic [ref=e9]: Username
      - textbox "Enter your username" [ref=e10]
      - generic [ref=e11]: 
    - generic [ref=e12]:
      - generic [ref=e13]: Password
      - textbox "Enter your password" [ref=e14]
      - generic [ref=e15]: 
    - generic [ref=e16]:
      - link "Sign in" [ref=e17] [cursor=pointer]:
        - /url: /app.html
      - generic [ref=e19]:
        - checkbox "Remember Me" [ref=e20]
        - text: Remember Me
      - generic [ref=e21]:
        - link [ref=e22] [cursor=pointer]:
          - /url: "#"
        - link [ref=e23] [cursor=pointer]:
          - /url: "#"
        - link [ref=e24] [cursor=pointer]:
          - /url: "#"
```