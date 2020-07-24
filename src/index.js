import React, { useEffect, createRef, useState } from 'react';

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
  let [status, setStatus] = useState(false);

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
            setStatus(true);
            loadData();
            timeout();
          }
        }
      });

      const timeout = () => {
        setTimeout(() => {
          setStatus(false);
        }, 0);
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
      {endMessage !== undefined && loadMore === false ?
        endMessage
        :
        loadMore === false &&
        <div style={{ ...styles.w100, ...styles.center }}>
          <span>No more data to show!</span>
        </div>
      }
    </>
  )
}