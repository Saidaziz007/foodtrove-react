import React, { useEffect } from "react";
import { toast } from "react-toastify";
import img from "../../assets/images/admin-hero.png";
import { ADMIN_CARDS, ADMIN_ITEMS } from "../../static";
import "./Admin.css";

function Admin() {
  useEffect(() => {
    toast.success("Welcome");
  }, []);
  return (
    <section className="admin">
      <div className="container">
        <div className="admin-all">
          <div className="admin-left">
            <h1>Admin</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
              recusandae necessitatibus quasi incidunt alias adipisci pariatur
              earum iure beatae assumenda rerum quod. Tempora magni autem a
              voluptatibus neque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
              rerum cum accusamus magni consequuntur architecto, ipsum deleniti
              expedita doloribus suscipit voluptatum eius perferendis amet!.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, maxime amet architecto est exercitationem optio ea
              maiores corporis beatae, dolores doloribus libero nesciunt qui
              illum? Voluptates deserunt adipisci voluptatem magni sunt sed
              blanditiis quod aspernatur! Iusto?
            </p>
            <div className="admin-info">
              {ADMIN_ITEMS?.map((el) => (
                <div key={el.id} className="admin-info-1">
                  <h1>
                    {el.title}
                    <span>k</span>
                  </h1>
                  <p>{el.info}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="admin-right">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="admin-wrapper">
          {ADMIN_CARDS?.map((el) => (
            <div key={el.id} className="admin-card">
              <h2>{el.icon}</h2>
              <h1>{el.title}</h1>
              <p>{el.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Admin;
