function Dialog(props) {
    return(
        <section className='dialog'>
            <h2>Rating Dialog</h2>
            <p>Really nothing man</p>
            <button className='closebtn' onClick={props.closeDialog}>❌</button>
        </section>
    )
};

export default Dialog;