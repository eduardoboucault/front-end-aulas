import useProtectPage from "../hook/useProtectPage";

const Feed = () => {

    useProtectPage()

    return (

        <>
            Página Feed
        </>

    );
}

export default Feed;