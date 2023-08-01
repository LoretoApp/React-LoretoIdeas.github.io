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
      <img src={imgSrc} alt={altText} />
      <section className="text">
        <h1>{title}</h1>
      </section>
    </div>
  );
};

const Container = () => {
  return (
    <div className="container">
      <div className="container">
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

const App = () => {
  return (
    <div>
      <Administrador />
      <Container />
      <Salir />
    </div>
  );
};

export default App;