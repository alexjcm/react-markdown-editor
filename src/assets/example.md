## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading


## Emphasis

**This is bold text**

*This is italic text*

~~Strikethrough~~


## Code

Syntax highlighting

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import MyComponent from './components/MyComponent'
import MyFancyRule from './components/my-fancy-rule.js'

ReactDOM.render(
  <MyComponent
    components={{
      // Use h2s instead of h1s
      h1: 'h2',
      hr: ({node, ...props}) => <MyFancyRule {...props} />
    }}
  >
  </MyComponent>,
  document.querySelector('#content')
)
```

Inline `code`


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit


Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


Loose lists?

- foo
- bar


Tasklist

* [ ] to do
* [x] done


## Links

[Espen.Codes](https://espen.codes/)

[Sanity](https://www.sanity.io/ "Sanity, the headless CMS and PaaS")

Autoconverted link https://github.com

[Link references][React]

[React]: https://reactjs.org "React, A JavaScript library for building user interfaces"


## Images and emojis

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

🎉🚀📝🔍🔖📌❤️

## HTML in markdown

Some characters, like &aelig;, &amp; and similar should be handled properly. Does anyone actually like the fact that you can embed HTML in markdown?

<image
  src="https://cdn9.pngable.com/1/20/14/yyKYW3qdZU/logo-brand-markdown.jpg"
  width="390"
  height="280"
/>


## Math 

Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following
equation.

$$
L = \frac{1}{2} \rho v^2 S C_L
$$


## Horizontal Rules

___

---

***

<hr /><hr />