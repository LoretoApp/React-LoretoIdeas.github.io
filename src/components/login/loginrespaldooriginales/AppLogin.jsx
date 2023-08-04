 import React from "react";
 import * as Components from './Components';

 function AppLogin() {
     const [signIn, toggle] = React.useState(true);
      return(
          <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Crear Cuenta</Components.Title>
                      <Components.Input type='text' placeholder='Nombre' />
                      <Components.Input type='email' placeholder='Correo' />
                      <Components.Input type='password' placeholder='Contraseña' />
                      <Components.Button>Registrate</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>Inicio Sesión</Components.Title>
                       <Components.Input type='email' placeholder='Correo' />
                       <Components.Input type='password' placeholder='Contraseña' />
                       <Components.Anchor href='#'>¿Olvidaste tu contraseña?</Components.Anchor>
                       <Components.Button>Iniciar Sesión</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Nos alegra verte</Components.Title>
                      <Components.Paragraph>
                      Inicie sesión para que puedas ver tus productos favoritos
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          Entrar
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Crear Cuenta</Components.Title>
                        <Components.Paragraph>
                            Crea una cuenta para que puedas guardar tus pedidos y disfrutar
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Registrate
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
      )
 }

 export default AppLogin;