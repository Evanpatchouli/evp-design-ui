import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React, { useState } from "react";

import { Button, Toast } from "evp-design-ui";

import { Waterfalls } from "evp-design-ui";

const Demo: React.FC = () => {
  const first =
    "https://ts1.cn.mm.bing.net/th/id/R-C.b7c59a76ba5296585d2623f09dad774c?rik=6F0qw8qAxehQPg&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn10113%2f320%2fw2048h3072%2f20190121%2fa618-hrvcwnm5441234.jpg&ehk=VnSCki%2fDIjMFYk55I6H%2bRvNbhP%2fta7QwGofG23lorcg%3d&risl=&pid=ImgRaw&r=0";
  return (
    <Waterfalls>
      <img src={first} alt="" />
      <img
        src="https://tse1-mm.cn.bing.net/th/id/OIP-C.TosTOaJ6wk6JleAIAsaHywHaNK?w=182&h=324&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt=""
      />
      <img
        src="https://ts1.cn.mm.bing.net/th/id/R-C.4e8405d8883d0b164e1ff5775d5eb6a3?rik=rIwnPZvdM9XLoQ&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn18%2f77%2fw974h1503%2f20180509%2f94c0-haichqz1372568.jpg&ehk=OUyfH8giz10FcQhcVGsRHNR77dZFmBNHpDRUUdHeeaw%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
      <img src="https://n.sinaimg.cn/sinacn20190821s/213/w2048h1365/20190821/4e2d-icmpfxc2142472.jpg" alt="" />

      <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.wAqKa2JSuB1ELKpmzO3xkwAAAA?pid=ImgDet&rs=1" alt="" />
      <img
        src="https://ts1.cn.mm.bing.net/th/id/R-C.57ceeb683a1e52c3ddaeb283b7718c41?rik=JdkSFvNJBKt98g&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn10113%2f320%2fw2048h3072%2f20190121%2f401e-hrvcwnm5440973.jpg&ehk=fb3yXJGwQpWCBJPKK4Snc5Wsmd8AW1dl8uqBHbcB7js%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
      <img src="https://p1.ssl.qhimg.com/t01b5b2defdae492bb7.jpg" alt="" />
      <img src="https://puui.qpic.cn/media_img/0/4535711595814766/0" alt="" />

      <img
        src="https://ts1.cn.mm.bing.net/th/id/R-C.e15495f3e5ccc83945ff4180f19aeaba?rik=qSZ2lW5ZH679bg&riu=http%3a%2f%2fwww.askququ.com%2fuploads%2fallimg%2f200211%2f1_200211020625_5.jpg&ehk=3nawSHgwSyav5dKpHNNEB9JLxDZiLYWJwpXQcOgmsBA%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
      <img
        src="https://ts1.cn.mm.bing.net/th/id/R-C.a620fce06c8fd33306081f0016797423?rik=G1PfTuYD1%2bDF5g&riu=http%3a%2f%2fpuui.qpic.cn%2fmedia_img%2f0%2f4535711608363792%2f0&ehk=KrQIipTumizukdHclqcRnUytMb2kAFtIX3q9DQ6mK14%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
      <img
        src="https://ts1.cn.mm.bing.net/th/id/R-C.087dadbffffa57c15effe6998c8c387d?rik=5ZFamx88q9zTnA&riu=http%3a%2f%2fqimg.hxnews.com%2f2018%2f0627%2f1530082502789.jpg&ehk=qBMlIoxviFKJK5ta1UVL91GNAy3yGZo91qgJsA3UcqM%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
      <img src="https://tse2-mm.cn.bing.net/th/id/OIP-C.1EjJBPqPNbgO0o0O_oIougHaNK?pid=ImgDet&rs=1" alt="" />

      <img src="https://wallpaperm.cmcm.com/5ca7789dafe34be6c06d74ed2a2739de.jpg" alt="" />
      <img src="https://www.juziss.com/uploads/allimg/180410/1S33KW5-2.jpg" alt="" />
      <img src="https://n.sinaimg.cn/sinakd10118/88/w768h920/20200730/3bac-iwxpesy3908709.jpg" alt="" />
      <img
        src="https://ts1.cn.mm.bing.net/th/id/R-C.66331a05e5bfbca351bc05bfcfc3e83b?rik=RY5ljaOtYG3hcw&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn18%2f70%2fw1024h1446%2f20180509%2f05f5-haichqz1373639.jpg&ehk=LfY3hRKII5JD5qLoxk4ZFnOklme0N7qBYAJ9Yr3iF5o%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />

      <img
        src="https://ts1.cn.mm.bing.net/th/id/R-C.6bc9e144b6ce9844cf65192e02219cbc?rik=vopoRPdFeOUCrA&riu=http%3a%2f%2fn.sinaimg.cn%2fsinakd20210129ac%2f508%2fw1047h1861%2f20210129%2f0f66-kiksqxf7089891.jpg&ehk=BSmCuEOXLmCusG%2bo0Y4BWQ32j3FWJ2Uy0EfNzM8W3Hk%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
      <img
        src="https://ts1.cn.mm.bing.net/th/id/R-C.d384ed0e0d9219bb94cf604618eeed6a?rik=9EkSAQOwQmQ%2f1w&riu=http%3a%2f%2fatt.0xy.cn%2fattachment%2fMon_2008%2f18_17777_da7ecc60b049d5f.jpeg%3f167&ehk=LQRt7nV6uDyPwIiohcNPy5KY%2b4nSh9dE73tJCtmlvEY%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
      <img
        src="https://ts1.cn.mm.bing.net/th/id/R-C.ca0c34d16bbadc84513e7afca723463a?rik=LXLIf%2byYJpGyqA&riu=http%3a%2f%2fp0.qhimgs4.com%2ft01b04d8cf52e62b5a5.jpg&ehk=JKFJr9urBmt3nOM7%2bozG9D8e6a3C6SCZgEvl6TECNXo%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
      <img
        src="https://ts1.cn.mm.bing.net/th/id/R-C.46b52e57a972f7a582ad4cb3eb445898?rik=SH9saeW0ELQgxA&riu=http%3a%2f%2fp3.qhimg.com%2ft01adca94ae50690f27.jpg&ehk=mmrQRogci3uKwNidvoN05xz96kfNg3hyD16oCBqEcsI%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />

      <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.Rrk0lEsI_8cho11L7ANzWAHaLH?pid=ImgDet&rs=1" alt="" />
      <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.8GC3Sl519I13l8CYLxRVtgHaEK?pid=ImgDet&rs=1" alt="" />
      <img src="https://img.zcool.cn/community/01ea345dbbbaeda801209e1f4beb71.jpg@1280w_1l_2o_100sh.jpg" alt="" />
      <img src="https://www.hsstar.com/lib/kindeditor/attached/image/20200905/20200905085807_85699.jpg" alt="" />
    </Waterfalls>
  );
};

const codes = `
import { Waterfalls } from "evp-design-ui";

const Demo: React.FC = () => {
  const first = "https://ts1.cn.mm.bing.net/th/id/R-C.b7c59a76ba5296585d2623f09dad774c?rik=6F0qw8qAxehQPg&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn10113%2f320%2fw2048h3072%2f20190121%2fa618-hrvcwnm5441234.jpg&ehk=VnSCki%2fDIjMFYk55I6H%2bRvNbhP%2fta7QwGofG23lorcg%3d&risl=&pid=ImgRaw&r=0";
  return <Waterfalls>
    <img src={first} alt="" />
    <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.TosTOaJ6wk6JleAIAsaHywHaNK?w=182&h=324&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
    <img src="https://ts1.cn.mm.bing.net/th/id/R-C.4e8405d8883d0b164e1ff5775d5eb6a3?rik=rIwnPZvdM9XLoQ&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn18%2f77%2fw974h1503%2f20180509%2f94c0-haichqz1372568.jpg&ehk=OUyfH8giz10FcQhcVGsRHNR77dZFmBNHpDRUUdHeeaw%3d&risl=&pid=ImgRaw&r=0" alt="" />
    <img src="https://n.sinaimg.cn/sinacn20190821s/213/w2048h1365/20190821/4e2d-icmpfxc2142472.jpg" alt="" />
    
    <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.wAqKa2JSuB1ELKpmzO3xkwAAAA?pid=ImgDet&rs=1" alt="" />
    <img src="https://ts1.cn.mm.bing.net/th/id/R-C.57ceeb683a1e52c3ddaeb283b7718c41?rik=JdkSFvNJBKt98g&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn10113%2f320%2fw2048h3072%2f20190121%2f401e-hrvcwnm5440973.jpg&ehk=fb3yXJGwQpWCBJPKK4Snc5Wsmd8AW1dl8uqBHbcB7js%3d&risl=&pid=ImgRaw&r=0" alt="" />
    <img src="https://p1.ssl.qhimg.com/t01b5b2defdae492bb7.jpg" alt="" />
    <img src="https://puui.qpic.cn/media_img/0/4535711595814766/0" alt="" />
    
    <img src="https://ts1.cn.mm.bing.net/th/id/R-C.e15495f3e5ccc83945ff4180f19aeaba?rik=qSZ2lW5ZH679bg&riu=http%3a%2f%2fwww.askququ.com%2fuploads%2fallimg%2f200211%2f1_200211020625_5.jpg&ehk=3nawSHgwSyav5dKpHNNEB9JLxDZiLYWJwpXQcOgmsBA%3d&risl=&pid=ImgRaw&r=0" alt="" />
    <img src="https://ts1.cn.mm.bing.net/th/id/R-C.a620fce06c8fd33306081f0016797423?rik=G1PfTuYD1%2bDF5g&riu=http%3a%2f%2fpuui.qpic.cn%2fmedia_img%2f0%2f4535711608363792%2f0&ehk=KrQIipTumizukdHclqcRnUytMb2kAFtIX3q9DQ6mK14%3d&risl=&pid=ImgRaw&r=0" alt="" />
    <img src="https://ts1.cn.mm.bing.net/th/id/R-C.087dadbffffa57c15effe6998c8c387d?rik=5ZFamx88q9zTnA&riu=http%3a%2f%2fqimg.hxnews.com%2f2018%2f0627%2f1530082502789.jpg&ehk=qBMlIoxviFKJK5ta1UVL91GNAy3yGZo91qgJsA3UcqM%3d&risl=&pid=ImgRaw&r=0" alt="" />
    <img src="https://tse2-mm.cn.bing.net/th/id/OIP-C.1EjJBPqPNbgO0o0O_oIougHaNK?pid=ImgDet&rs=1" alt="" />
    
    <img src="https://wallpaperm.cmcm.com/5ca7789dafe34be6c06d74ed2a2739de.jpg" alt="" />
    <img src="https://www.juziss.com/uploads/allimg/180410/1S33KW5-2.jpg" alt="" />
    <img src="https://n.sinaimg.cn/sinakd10118/88/w768h920/20200730/3bac-iwxpesy3908709.jpg" alt="" />
    <img src="https://ts1.cn.mm.bing.net/th/id/R-C.66331a05e5bfbca351bc05bfcfc3e83b?rik=RY5ljaOtYG3hcw&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn18%2f70%2fw1024h1446%2f20180509%2f05f5-haichqz1373639.jpg&ehk=LfY3hRKII5JD5qLoxk4ZFnOklme0N7qBYAJ9Yr3iF5o%3d&risl=&pid=ImgRaw&r=0" alt="" />
    
    <img src="https://ts1.cn.mm.bing.net/th/id/R-C.6bc9e144b6ce9844cf65192e02219cbc?rik=vopoRPdFeOUCrA&riu=http%3a%2f%2fn.sinaimg.cn%2fsinakd20210129ac%2f508%2fw1047h1861%2f20210129%2f0f66-kiksqxf7089891.jpg&ehk=BSmCuEOXLmCusG%2bo0Y4BWQ32j3FWJ2Uy0EfNzM8W3Hk%3d&risl=&pid=ImgRaw&r=0" alt="" />
    <img src="https://ts1.cn.mm.bing.net/th/id/R-C.d384ed0e0d9219bb94cf604618eeed6a?rik=9EkSAQOwQmQ%2f1w&riu=http%3a%2f%2fatt.0xy.cn%2fattachment%2fMon_2008%2f18_17777_da7ecc60b049d5f.jpeg%3f167&ehk=LQRt7nV6uDyPwIiohcNPy5KY%2b4nSh9dE73tJCtmlvEY%3d&risl=&pid=ImgRaw&r=0" alt="" />
    <img src="https://ts1.cn.mm.bing.net/th/id/R-C.ca0c34d16bbadc84513e7afca723463a?rik=LXLIf%2byYJpGyqA&riu=http%3a%2f%2fp0.qhimgs4.com%2ft01b04d8cf52e62b5a5.jpg&ehk=JKFJr9urBmt3nOM7%2bozG9D8e6a3C6SCZgEvl6TECNXo%3d&risl=&pid=ImgRaw&r=0" alt="" />
    <img src="https://ts1.cn.mm.bing.net/th/id/R-C.46b52e57a972f7a582ad4cb3eb445898?rik=SH9saeW0ELQgxA&riu=http%3a%2f%2fp3.qhimg.com%2ft01adca94ae50690f27.jpg&ehk=mmrQRogci3uKwNidvoN05xz96kfNg3hyD16oCBqEcsI%3d&risl=&pid=ImgRaw&r=0" alt="" />

    <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.Rrk0lEsI_8cho11L7ANzWAHaLH?pid=ImgDet&rs=1" alt="" />
    <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.8GC3Sl519I13l8CYLxRVtgHaEK?pid=ImgDet&rs=1" alt="" />
    <img src="https://img.zcool.cn/community/01ea345dbbbaeda801209e1f4beb71.jpg@1280w_1l_2o_100sh.jpg" alt="" />
    <img src="https://www.hsstar.com/lib/kindeditor/attached/image/20200905/20200905085807_85699.jpg" alt="" />
  </Waterfalls>;
};
`;

export default class Example extends React.Component {
  state: Readonly<{
    showCode: boolean;
  }> = {
    showCode: false,
  };

  render() {
    return (
      <>
        <Card
          w={"100%"}
          style={{ boxSizing: "border-box" }}
          footer={
            <div style={{ width: "100%" }}>
              <Row justifyContent="right" w={"100%"} h={"fit-content"}>
                <Button
                  $click={() =>
                    this.setState({
                      ...this.state,
                      showCode: !this.state.showCode,
                    })
                  }
                  theme="text"
                  size="mini"
                  text="code"
                />
                <Button
                  theme="text"
                  size="mini"
                  text="copy"
                  $click={() => {
                    navigator.clipboard
                      .writeText(codes)
                      .then(() => {
                        Toast.success("Copy Success!");
                      })
                      .catch((err) => {
                        console.error(err);
                        Toast.error("Copy Failed!");
                      });
                  }}
                />
              </Row>
              <div style={{ width: "960px" }}>
                <Tsx show={this.state.showCode}>{codes}</Tsx>
              </div>
            </div>
          }
        >
          <Demo />
        </Card>
      </>
    );
  }
}
