import { useRouter } from 'next/router';

const Page = ()=>{

    const router = useRouter();
    console.log('Router',router);

    return(

<div>
    <h1>This is my index Page {router.query.name}</h1>
    <button onClick={e =>router.push(`/user/${router.query.name}/setting`)}>Open setting page</button>
    <button onClick={e =>router.push("/")}> GoTo Home Page  </button>
</div>

    );
};

export default Page;