# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC001Login.spec.ts >> App Tools >> Login With Valid User @p0
- Location: src\tests\TC001Login.spec.ts:19:5

# Error details

```
Error: locator.fill: Document.querySelectorAll: '["#username"]' is not a valid selector
query@debugger eval code:5720:41
_queryCSS/<@debugger eval code:5730:12
_cached@debugger eval code:5507:20
_queryCSS@debugger eval code:5717:17
_querySimple@debugger eval code:5597:19
query/<@debugger eval code:5545:29
_cached@debugger eval code:5507:20
query@debugger eval code:5538:19
query@debugger eval code:5752:44
_callQuery/<@debugger eval code:5710:21
_cached@debugger eval code:5507:20
_callQuery@debugger eval code:5709:17
_queryEngine@debugger eval code:5698:19
query/<@debugger eval code:5540:23
_cached@debugger eval code:5507:20
query@debugger eval code:5538:19
queryAll@debugger eval code:7080:32
_queryEngineAll@debugger eval code:7059:49
querySelectorAll@debugger eval code:7046:30
@debugger eval code line 311 > eval:2:42
evaluate@debugger eval code:313:16
@debugger eval code:1:44
@debugger eval code:1:62

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