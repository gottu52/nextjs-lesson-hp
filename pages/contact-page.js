import Layout from "../components/layout"
import Image from "next/image"

const Contact = () => {
  return (
    <Layout title="Contact">
        <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
            <div className="mt-4">
                <p className="fon-bold">Contact info</p>
            </div>
            <div className="flex justify-center mt-4">
                <Image 
                    className="rounded-full"
                    src="/icon.jpg"
                    alt="profile"
                    width={60}
                    height={60}
                />
            </div>
            <ul className="mt-4 align-center">
                <li className="font-bold">Address</li>
                <li className="mt-2 text-xs text-gray-600">city</li>
                <li className="mt-4 font-bold">E-mail</li>
                <li className="mt-2 text-xs text-gray-600">abcdefg@email.ne.jp</li>
                <li className="mt-4 font-bold">Phone</li>
                <li className="mt-2 text-xs text-gray-600">000-0127-0127</li>
            </ul>
            <ul className="mt-4 flex justify-center space-x-10">
                <i className="fab fa-twitter text-3xl"></i>
                <i className="fab fa-facebook-square text-3xl"></i>
                <i className="fab fa-github text-3xl"></i>
            </ul>
            
        </div>
    </Layout>
  )
}

export default Contact
