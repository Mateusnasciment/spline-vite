# Spline | Landing Page with 3D Design

![banner](banner.png)

> Construction of a project conceived by the `DesignCode` channel, where he was taught how to transform a two-dimensional Figma layout into a three-dimensional layout with the Spline tool. From then on, with the available layout, it was possible to incorporate the 3D layout project created in Spline into a Landing Page with a super modern and smooth design.

Looking at the organization of the code, I think that the page files or the component itself should deal not only with the content and semantics but also with how they will be presented, for me a component should deal with everything about its rendering or the way that it is presented, so I try not to separate the styles in a loose file, but keep them inside the component file itself inside a Javascript object, so I can maintain a cohesive and well-structured style with the advantage of occupying only one line for each tag you need and the React component is much more readable and clean.

### TailwindCSS 

```jsx
const style = {
// ...
  aside: {
    container: `hidden absolute top-[125px] left-[100px] 2xl:top-[200px] 2xl:left-[205px] md:flex flex-col items-center justify-center text-white`,
    verticalLine: `h-[400px] w-[2px] bg-gradient-to-t from-[#004CF5] to-[#E044DE]`,
    socialIconsContainer: `flex flex-col mt-4 gap-2`,
    socialIcon: `w-8 h-8 p-1 cursor-pointer hover:brightness-75`,
  },
 }
```

### JSX

```jsx
<aside className={style.aside.container}>
  <div className={style.aside.verticalLine} />
  <div className={style.aside.socialIconsContainer}>
    <AiFillTwitterCircle className={style.aside.socialIcon} />
    <a href="https://github.com/stardusteight-d4c" target="_blank">
      <AiFillGithub className={style.aside.socialIcon} />
    </a>
  </div>
</aside>
```
