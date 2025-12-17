function ProfileCard({ title, handle }) {
    // const title = props.title;
    // const handle = props.handle;

    //const { title, handle } = props;
    // the three lines of code above are all === to the code in the func argument


    return (
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    )
}

export default ProfileCard;