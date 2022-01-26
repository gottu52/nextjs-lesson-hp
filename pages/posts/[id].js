import Link from "next/link";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ post }) {
    if(!post) {
        return <div>Loading...</div>
    }
    return(
        <Layout title={post.title}>
            <p className="m-4">
                { "ID : " }
                {post.id}
            </p>
            <p className="mb-8 text-xl font-bold">{post.title}</p>
            <p className="px-10">{post.body}</p>
            <Link href="/blog-page" passHref>
                <div className="flex cursor-pointer mt-12">
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                        ></path>
                    </svg>
                    <span>Back to blog-page</span>
                </div>
            </Link>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getAllPostIds()
    return{
        paths,
        //予想外のデータが入ってきた場合、notFound404を返す
        //動的にコンテンツが変化する場合はtrueで
        fallback: false
    }
}

//paramsはgetStaticPathsで拾ってきた値
export async function getStaticProps({ params }) {
    const post = await getPostData(params.id)
    return{
        props: {
            post
        }
    }
}
