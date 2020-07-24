# react-infinite-data
Forget pagination, Use infinite page scroll for good user experience. This react component has necessary customization and its super easy to integrate in your project. Thinking about the size? Don't worry the size is just **3.8K (gzipped: 1.2k)** only.

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
	offset={100}  
	loader={<Loader />} 
	loadingContainerClass="w-100"
	endMessage={<EndMessage />}
>
	{content}
</InfiniteDataScroll>
```

# Features
- Very less size comparing to other similar packages
- Configuring only 2 props is enough for integration
- Add your own loader
- Add your own reached end message
- Specify the offset to load

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