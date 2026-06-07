function Dialog(props) {
    return(
        <section className='dialog'>
            <h2>Rating Dialog</h2>
            <p>When someone is rating it low, which means they are normally frustated to the product, but thats all I can offer! I tried! So Please Be mercy and give me some good rating!</p>
            <button className='closebtn' onClick={props.closeDialog}>❌</button>
        </section>
    )
};

export default Dialog;