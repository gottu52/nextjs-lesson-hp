import fetch from "node-fetch"
const apiUrl = "http://jsonplaceholder.typicode.com/posts"

//jsonデータを取ってくる関数
export async function getAllPostData() {
    //urlからデータを取ってくる
    const res = await fetch(new URL(apiUrl))
    //結果をjson形式に変換
    const posts = await res.json()
    return posts
}

//jsonデータの中からidを取ってくる関数
export async function getAllPostIds() {
    //urlからデータを取ってくる
    const res = await fetch(new URL(apiUrl))
    //json形式に変換
    const posts = await res.json()
    return posts.map((post) => {
        return{
            //getStaticPathsで使用する場合、必ずparamsをつけなくてはならない
            params: {
                id: String(post.id)
            }
        }
    })
}

//idを指定し、特定のデータを取ってくる関数
export async function getPostData(id) {
    //特定のidのurlからデータを取ってくる
    const res = await fetch(new URL(`${apiUrl}/${id}/`))
    //json形式に変換
    const post = await res.json()
    return post
}
