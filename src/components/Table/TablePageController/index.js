import React from 'react'
import styles from './TablePageController.module.css'

function TablePageController({numOfPages, setPage, page, slice }){
    const lastPage = numOfPages[numOfPages.length-1]
    const [content, setContent] = React.useState('');
    const [width, setWidth] = React.useState(0);
    const span = React.useRef();
  
    React.useEffect(() => {
      setWidth(span.current.offsetWidth+20);
    }, [content]);
  
    const changeHandler = event => {
      setContent(event.target.value);
    };

    React.useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(oldPage=>oldPage-1);
        }
        
    }, [page, slice, setPage])

    const nextPage = () => setPage(oldPage=>oldPage-1)

    function handleKeyDown(event){
        if(event.key === 'Enter'){
            if (event.target.value < 1){
                setPage(1)
                setContent(event.target.value)
            }
            else if (event.target.value <= lastPage){
                setPage(event.target.value)
                setContent(event.target.value)
            }
            else{
                setPage(lastPage)
                setContent(lastPage)
            }
            event.target.value="" 
            event.target.blur()
        }
        else if (event.keyCode>57){
            event.preventDefault() 
        }

    }

    const backPage =()=> setPage(oldPage=>parseInt(oldPage)+1)
    return (
    <div className={styles.tableFooter}> 
            <button
                disabled={page==1} // eslint-disable-line
                onClick={nextPage}
                className={
                    `${styles.button} ${
                        page==1 && styles.disabledButton // eslint-disable-line
                    }`
                }
            >
                {"<"}
            </button>
            <span className={styles.hide} ref={span}>{content}</span>
            <input 
                style={{ width }}
                className={styles.pageNumber}
                placeholder={`${page}`}
                onChange={changeHandler}
                onKeyDown={handleKeyDown}
                pattern="^[0-9]+$"
            />
            <button
                disabled={page==lastPage} // eslint-disable-line
                onClick={backPage}
                className={
                    `${styles.button} ${
                        page==lastPage && styles.disabledButton // eslint-disable-line
                    }`
                }
            >
                {">"}
            </button>
    </div>
    )
    
}

export default TablePageController;