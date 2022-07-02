import '../App.css';
import "antd/dist/antd.min.css";
import { dummy } from '../ListviewPage/dataDummy';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Photo from '../ListviewPage/photo';

function ListviewScreen() {
    return (
        <div className="app">
            <Layout>
                <Content className="app-container">
                    <div className="list-title">데이터 조회</div>
                    <div className="list-container">
                        {
                            dummy.results.map((item) => {
                                return (
                                    <Photo
                                        key = {item.id}
                                        photo = {item.photo}
                                        name = {item.name}
                                        age = {item.age}
                                        disease = {item.disease}
                                    />
                                )
                            })
                        }
                    </div>
                </Content>
            </Layout>
        </div>
    );
}

export default ListviewScreen;