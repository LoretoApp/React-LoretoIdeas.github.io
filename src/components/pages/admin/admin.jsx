import './admin.css'; // Importa el archivo CSS si lo tienes

const Administrador = () => {
  return (
    <section id="Administrador">
      <p>Administrador</p>
    </section>
  );
};

const Box = ({ imgSrc, altText, title }) => {
  return (
    <div className="box">
      <img className='img-admin' src={imgSrc} alt={altText} />
      <section className="texto-admin">
        <h3 className='titulo-admin'>{title}</h3>
      </section>
    </div>
  );
};

const Container = () => {
  return (
    <div className="container container-admin">
      <div className="container container-admin">
        <Box 
          imgSrc="assets/img/6372973_list_menu_navigation_option_setting_icon (1).png"
          altText="Imagen 2"
          title="Ver Todo"
        />
      </div>
      <Box
        imgSrc="assets/img/add-product.png"
        altText="Imagen 2"
        title="Agregar Producto"
      />
      <Box
        imgSrc="assets/img/edit-product.png"
        altText="Imagen 3"
        title="Editar Producto"
      />
      <Box
        imgSrc="assets/img/delete-product.png"
        altText="Imagen 4"
        title="Desactivar Producto"
      />
    </div>
  );
};

const Salir = () => {
  return (
    <section id="Salir">
      <p>Salir X</p>
    </section>
  );
};

const VistaAdministrador = () => {
  return (
    <div>
      <Administrador />
      <Container />
      <Salir />
    </div>
  );
};

export default VistaAdministrador;