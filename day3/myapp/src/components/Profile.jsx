import sytles from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <div className={sytles.profile}>
        <div>
          <img src="../public/gitar.jpg" alt="cibi" />
        </div>
        <div className={sytles.description}>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            hic nemo neque sint distinctio qui optio doloremque mollitia
            adipisci. Dolorem ab sequi mollitia ratione autem eveniet earum
            consequatur deserunt blanditiis harum maiores, voluptas aut officia
            saepe, libero, culpa tenetur provident sed ipsum dolor alias ipsam
            laborum numquam. Consectetur sapiente, dicta officiis natus quia
            mollitia reiciendis omnis eum? Eum amet reiciendis rerum
            reprehenderit ducimus sit excepturi officia facere animi quod
            tempora, quos sapiente nobis ad voluptatum atque, enim iusto,
            nesciunt harum hic laborum voluptates aut aliquam est! Minus neque
            explicabo rem dicta inventore beatae in voluptatibus, iste ea
            accusamus soluta dolorem eum consectetur temporibus enim corporis
            tenetur quasi omnis perferendis adipisci odio officiis impedit
            minima laboriosam! Magni deserunt, ea impedit maxime voluptate ex
            commodi molestiae sequi. Illum nihil inventore cumque amet ratione
            aperiam perspiciatis modi, voluptatem, nemo, delectus libero
            adipisci natus veritatis expedita deserunt animi neque sed commodi
            ex eligendi recusandae. Odio, distinctio autem ullam assumenda vero
            blanditiis nam! Minus id, inventore nulla, omnis quas fugiat ipsa
            velit mollitia commodi alias cum neque maxime, reiciendis eum
            similique consectetur.
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
