import { Link } from '@mui/material';
import './NewPosts.css';
export default function NewPosts() {
    return (
        <div className="divTable">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Featured Posts</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Data Structures</td>
                        <td><Link  href="#">View Post</Link></td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>All About React</td>
                        <td><Link href="#">View Post</Link></td>
                    </tr>
                    <tr>
                        <td>Larry the Bird</td>
                        <td>Learn BootStrap</td>
                        <td><Link href="#">View Post</Link></td>
                    </tr>
                    <tr>
                        <td>Larry the Bird</td>
                        <td>Master Backend</td>
                        <td><Link href="#">View Post</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
