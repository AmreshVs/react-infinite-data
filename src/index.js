import React, { useEffect, createRef } from 'react';

const styles = {
  w100: {
    width: '100%',
  },
  center: {
    textAlign: 'center'
  }
};

export default function InfiniteDataScroll({ loadMore, loadData, children, loader, endMessage, loadingContainerClass, bottomOffset = 100 }) {

  let loadingRef = createRef(null);
  let status = false;

  useEffect(() => {
    addScrollListener();

    return () => {
      window.removeEventListener("scroll", function () {
        return;
      });
    }
  }, [loadData]);

  const addScrollListener = () => {
    if (loadMore === true && status === false) {
      let windowInnerHeight = window.innerHeight;
      window.addEventListener("scroll", function () {
        if (loadingRef.current !== null) {
          let elementTop = loadingRef.current.offsetTop;
          let offset = elementTop - windowInnerHeight - bottomOffset;
          let scrollY = this.scrollY;
          if (scrollY >= offset) {
            status = true;
            timeout();
            loadData();
          }
        }
      });

      const timeout = () => {
        setTimeout(() => {
          status = false;
        }, 1000);
      }
    }
  }

  let attrs = {
    className: loadingContainerClass !== undefined ? loadingContainerClass : '',
    style: loadingContainerClass === undefined ? styles.w100 : null
  }

  return (
    <>
      {children}
      {loadMore === true &&
        <div {...attrs} ref={loadingRef}>
          {loader !== undefined ?
            loader
            :
            <div style={{ ...styles.w100, ...styles.center }}>
              <span>Loading...</span>
            </div>
          }
        </div>
      }
      {loadMore === false && endMessage !== undefined ?
        endMessage
        :
        <div style={{ ...styles.w100, ...styles.center }}>
          <span>No more data to show!</span>
        </div>
      }
    </>
  )
}