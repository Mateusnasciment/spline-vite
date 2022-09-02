# Spline | Landing Page with 3D Design

![banner](./readme/banner.png)

> Construction of a project conceived by the `DesignCode` channel, where he was taught how to transform a two-dimensional Figma layout into a three-dimensional layout with the Spline tool. From then on, with the available layout, it was possible to incorporate the 3D layout project created in Spline into a Landing Page with a super modern and smooth design.


## Cascading Style Sheets

Looking at the organization of the code, I think that the page files or the component itself should deal not only with the content and semantics but also with how they will be presented, for me a component should deal with everything about its rendering or the way that it is presented, so I try not to separate the styles in a loose file, but keep them inside the component file itself inside a `JavaScript Object`, so I can maintain a cohesive and well-structured style with the advantage of occupying only one line for each tag you need and the React component is much more readable and clean.

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
<br />

# Spline Design

![spline3d](./readme/spline3d.png)

> Spline is a tool very similar to `Figma`, but aimed at the three-dimensional development environment. In which people can collaborate as a team at the same time to develop a single project. It has a simple and very intuitive interface.

To transform a figma layout into 3D, we must first export the same layers that we want to work with as a 3D component inside the Spline, the export must be in PNG and in 3x for better quality.

In Spline we create a new file with a new template that should have the same measurement units as Figma. In the Spline interface there are the layers and components on the left side and the properties of each layer on the right side, and to add 3D behavior to 2D elements we will work with the properties provided by the Spline on the right side.

### Material <br />
In Material we can assign colors, gradients, images among other properties for example. The first layer should be the UI layout image with just the elements we want in the `foreground`.

### Shape <br />
In the top center menu we can add new shapes and change the shape of this element such as sides, corner radius and especially add volume with the `extrusion` property. Also with this new shape we can add different materials and so on, like the `depth` which resembles the gradient and make a shadow effect with the gradient shifting to black.

### Animations <br />
Animations can be made from initial and final states in which we define these states and durations with events. Basically the animations are based on these two properties `States` and `Events`.

At the end of it all, Spline provides a library called react-spline in which it allows you to export and use spline scenes directly on your React sites. And so we have a totally powerful environment to generate 3D interfaces and effects for your sites with an easy-to-implement export!

```jsx
import Spline from '@splinetool/react-spline'
// ...
return (
  // ...
  <Spline
    scene="https://prod.spline.design/rQl4psuJT3fXArYd/scene.splinecode"
    className={style.spline}
  />
```

