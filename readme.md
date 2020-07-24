# react-infinite-data
Forget pagination, Use infinite page scroll for good user experience. This react component has necessary customization and its super easy to integrate in your project. Thinking about the size? Don't worry the size is just **3.8K (gzipped: 1.2k)** only and there are no other dependencies.

# Install
```bash
  npm i react-infinite-data
```

# Import
```jsx
import InfiniteDataScroll from 'react-infinite-data';
```
# Simple Usage
```jsx
<InfiniteDataScroll loadData={loadData} loadMore={loadMore}>
    {content}
</InfiniteDataScroll>
```

# Advanced Usage
```jsx
<InfiniteDataScroll 
    loadData={loadData}
    loadMore={loadMore}
    // Below are optional
    offset={100}  
    loader={<Loader />} 
    loadingContainerClass="w-100"
    endMessage={<EndMessage />}
>
    {content}
</InfiniteDataScroll>
```
Follow the props section or  live example to learn more about `loadMore` `LoadData` `<Loader />` `<EndMessage />`
# Live Example
[![Edit react-infinite-scroll Example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-infinite-scroll-example-likhl?fontsize=14&hidenavigation=1&theme=dark)

The above example includes all the advanced usage of this component.

# Features
- Very less size comparing to other similar packages
- Configuring only 2 props is enough for integration
- Add your own loader
- Add your own reached end message
- Specify the offset of reaching the bottom to load data.

# Important Note
Wrap your component with `<InfiniteDataScroll> ... </<InfiniteDataScroll >` and make sure to follow PureComponent or Memo techniques on child component to get optimal performance.
`...` in the above usage is refering to the child component. <br>
If you are unsure about these techniques check below or follow the above example
[Reactjs - Pure Component](https://reactjs.org/docs/react-api.html#reactpurecomponent "Reactjs - Pure Component")
[Reactjs - Memo](https://reactjs.org/docs/react-api.html#reactmemo "Reactjs - Memo")

# Props
Name | Type | Default | Description
-----|------|--------------|-----------
**loadData** | function* | - | A function which must be called while reaching the end. This function is expected to perform some operation to load more data.
**loadMore** | boolean* | - | Expects a **true** or **false** which tells the component to look for more data or not
**loader** | component | Loading... | Expects an react component for loader like `<div><span>Loading...</span></div>`
**loadingContainerClass** | string | -  | Expects **CSS class** to customize the loader container like height, width ,...etc. By default the width of the loading container is set to 100%
**endMessage** | component | No more data to show! | Expects an react component for end message like `<div><span>No more data to show!</span></div>`
**bottomOffset** | number | 100 | Expects an bottom offset height (px) in Number to trigger the loadMore function while reaching the end

Note: Required props are marked with * (asterisk)

To Support and Contribute follow the below link
[GitHub - react-infinite-data](https://github.com/AmreshVs/react-infinite-data "react-infinite-data")