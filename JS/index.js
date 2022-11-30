import egroj from '../json/egroj.json' assert {type: 'json'};

let ac;
let ah;
let at;
let asc;

let userAdmin;
let passAdmin;

//Sonidos
let winAudio = new Audio("resources/sounds/win.wav");
let clickAudio = new Audio("resources/sounds/click.wav");
let rightAudio = new Audio("resources/sounds/right.wav");
let wrongAudio = new Audio("resources/sounds/wrong.wav");

const secret = "No Definido"
let nameLucero, nameCarlos, nameKarol, nameHelen, nameLuisa, nameJoaquin, nameAura, nameJorge, nameMagda,
nameRita, nameJenny, namePaola, nameRodrigo, nameSebastian, nameSantiago, nameMarcela, nameSaul, nameHanne, 
nameJohan, nameJonathan = "";
let userLucero, userCarlos, userKarol, userHelen, userLuisa, userJoaquin, userAura, userJorge, userMagda,
userRita, userJenny, userPaola, userRodrigo, userSebastian, userSantiago, userMarcela, userSaul, userHanne, 
userJohan, userJonathan = "";
let passLucero, passCarlos, passKarol, passHelen, passLuisa, passJoaquin, passAura, passJorge, passMagda,
passRita, passJenny, passPaola, passRodrigo, passSebastian, passSantiago, passMarcela, passSaul, passHanne, 
passJohan, passJonathan = "";
let r1Lucero, r1Carlos, r1Karol, r1Helen, r1Luisa, r1Joaquin, r1Aura, r1Jorge, r1Magda,
r1Rita, r1Jenny, r1Paola, r1Rodrigo, r1Sebastian, r1Santiago, r1Marcela, r1Saul, r1Hanne, 
r1Johan, r1Jonathan = "";
let r2Lucero, r2Carlos, r2Karol, r2Helen, r2Luisa, r2Joaquin, r2Aura, r2Jorge, r2Magda,
r2Rita, r2Jenny, r2Paola, r2Rodrigo, r2Sebastian, r2Santiago, r2Marcela, r2Saul, r2Hanne, 
r2Johan, r2Jonathan = "";
let r3Lucero, r3Carlos, r3Karol, r3Helen, r3Luisa, r3Joaquin, r3Aura, r3Jorge, r3Magda,
r3Rita, r3Jenny, r3Paola, r3Rodrigo, r3Sebastian, r3Santiago, r3Marcela, r3Saul, r3Hanne, 
r3Johan, r3Jonathan = "";
let asLucero, asCarlos, asKarol, asHelen, asLuisa, asJoaquin, asAura, asJorge, asMagda,
asRita, asJenny, asPaola, asRodrigo, asSebastian, asSantiago, asMarcela, asSaul, asHanne, 
asJohan, asJonathan = "";
let indexLucero, indexCarlos, indexKarol, indexHelen, indexLuisa, indexJoaquin, indexAura, indexJorge, indexMagda,
indexRita, indexJenny, indexPaola, indexRodrigo, indexSebastian, indexSantiago, indexMarcela, indexSaul, indexHanne, 
indexJohan, indexJonathan = "";

let arrayUser = [];
let arrayAdmin = [];

let indexLogin;


let userLogin, nameLogin, passLogin, r1Login, r2Login, r3Login, secretlogin = ""; 

//Vista Admin LogIn
let loginIn = document.getElementById("egroj");

//Vista Datos
let view = document.getElementById("ver");
let btnSet = document.getElementById("set");
let btnGet = document.getElementById("get");
let btnUpdate = document.getElementById("update");
let btnDelete = document.getElementById("delete");

//Vista Opciones
let opcionesAdmin = document.getElementById("opcionesAdmin");
let btnPlay = document.getElementById("play");
let btnEntrar = document.getElementById("entrar");
let btnReset = document.getElementById("reset");
let btnLimpiar = document.getElementById("limpiar");

//Vista Opciones falsas
let opcionesfalsas = document.getElementById("opcionesfalsas");
let btnUpdatefalso = document.getElementById("updatefalso");

//Vista cerrar Sesión
let signUp = document.getElementById("cerrar sesion");
let btnSignUp = document.getElementById("cerrar sesion");

//Vista Amigo Secreto
let amigoSecreto = document.getElementById("amigo");
let btnAmigo = document.getElementById("amigosecreto");

function startGame(){
    
    adminUser();

    window.addEventListener('DOMContentLoaded', PintarDB());

    loginIn.style.display = "block";
    view.style.display = "none";
    opcionesAdmin.style.display = "none";
    opcionesfalsas.style.display = "none";
    signUp.style.display = "none";
    amigoSecreto.style.display = "none";
    
    btnEntrar.addEventListener('click', credenciales);

    btnLimpiar.addEventListener('click', ClearCamp);

    btnSet.addEventListener('click', (e)=>{
        e.preventDefault();

        let name = document.getElementById("name").value.toUpperCase();
        let pass = document.getElementById("pass").value;
        let user = document.getElementById("user").value;
        let regaloOne = document.getElementById("regaloOne").value;
        let regaloTwo = document.getElementById("regaloTwo").value;
        let regaloThree = document.getElementById("regaloThree").value;

        CrearUser(name, pass, user, regaloOne, regaloTwo, regaloTwo, regaloThree, secret);
        guardarDB(arrayUser);
        ClearCamp();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario Creado con Exíto ',
            showConfirmButton: false,
            timer: 1200
        })
        winAudio.play();

    });

    btnGet.addEventListener('click', (e)=>{
        e.preventDefault();
        let userInput = document.getElementById("user").value;
        let nameInput = document.getElementById("name").value.toUpperCase();
        getUserAdmin(userInput, nameInput);
        wrongAudio.play();
    });

    btnDelete.addEventListener('click', (e)=>{
        e.preventDefault();
        let userInput = document.getElementById("user").value;
        deleteUser(userInput);
        wrongAudio.play();
    });

    btnUpdate.addEventListener('click', (e)=>{
        e.preventDefault();
        let userInput = document.getElementById("user").value;
        updateUserAdmin(userInput);
        winAudio.play();
    });

    btnUpdatefalso.addEventListener('click', (e)=>{
        e.preventDefault();
        updateUser(userLogin);
        winAudio.play();
    });

    btnPlay.addEventListener('click', (e)=>{
        // e.preventDefault();

        let todos = ["ABUELITA LUCERO","LUISA FERNANDA CORREDOR GUEVARA","KAROL ANDREA CORREDOR GUEVARA","AURA MILENA CORREDOR GUEVARA","ABUELITO CARLOS","JOAQUIN VELANDIA CORREDOR","HELEN DAYANA ROJAS CORREDOR","JORGE EDILSON VEGA ACOSTA",
        "MAGDA LUZ CORREDOR GUEVARA","RITA HURTADO CORREDOR","LUZ JENNY CORREDOR GUEVARA","PAOLA RIVERA VARGAS","LUIS RODRIGO TELLEZ","SANTIAGO TELLEZ CORREDOR","SEBASTIAN TELLEZ CORREDOR",
        "MARCELA CORREDOR GUEVARA","SAÚL GONZÁLEZ","HANNE CAMILA SIERRA CORREDOR","JOHAN ANDRES SIERRA CORREDOR","JONATHAN DAVID SIERRA CORREDOR"];

        random(todos);

        // playAppAdmin();
        
        winAudio.play();

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Amigos Secretos Asignados',
            showConfirmButton: false,
            timer: 1200
        })    
            
    });

    btnReset.addEventListener('click', (e)=>{
        resetGame();
        winAudio.play();
    })

    btnSignUp.addEventListener('click', SignUp);

    btnAmigo.addEventListener('click', ()=>{
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: amigo,
            text: 'Opciones de Regalo : '+amigoR1+", "+amigoR2+", "+amigoR3,
            showConfirmButton: true,
            timer: 6700
        })
    })
    
}

function clearLogIn(){
    let username = document.getElementById('username').value = "";
    let password = document.getElementById("password").value = "";
}

function SignUp(){

    let timerInterval
    Swal.fire({
    // title: '¡ Guardando !',
    html: 'Cerrando Sesión ...',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        // const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        // b.textContent = Swal.getTimerLeft()
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {

        loginIn.style.display = "block";
        view.style.display = "none";
        opcionesAdmin.style.display = "none";
        opcionesfalsas.style.display = "none";
        signUp.style.display = "none";
        amigoSecreto.style.display = "none";
        clearLogIn();
        clickAudio.play();
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Sesión Cerrada',
            showConfirmButton: false,
            timer: 1000
          })

    }
    
})

}

const CrearUser = (name, pass, user, regaloOne, regaloTwo, regaloThree, secret) => {
    let nodefinido = "No definido"
    if(regaloOne=="" || regaloTwo=="" || regaloThree == ""){
        let jugador = {
            name: name,
            password: pass,
            username: user,
            regaloOne: nodefinido,
            regaloTwo: nodefinido,
            regaloThree: nodefinido,
            secret: secret
        }
        
        arrayUser.push(jugador);

        return jugador;
    }


}

const guardarDB = (arrayUser) => {

    localStorage.setItem('usuarios', JSON.stringify(arrayUser));

    PintarDB();

}

const PintarDB = ()=>{
    arrayUser = JSON.parse(localStorage.getItem('usuarios'));
    if(arrayUser==null){
        arrayUser = [];
    }
    else{
        arrayUser.forEach((element, index) => {
            console.log(element)
            if(element.name=="JORGE EDILSON VEGA ACOSTA"){
                nameJorge = element.name;
                passJorge = element.password;
                userJorge = element.username;
                r1Jorge = element.regaloOne;
                r2Jorge = element.regaloTwo;
                r3Jorge = element.regaloThree;
                asJorge = element.secret;
                indexJorge = index;

            }

            if(element.name=="AURA MILENA CORREDOR GUEVARA"){
                nameAura = element.name;
                passAura = element.password;
                userAura = element.username;
                r1Aura = element.regaloOne;
                r2Aura = element.regaloTwo;
                r3Aura = element.regaloThree;
                asAura = element.secret;
                indexAura = index;

            }

            if(element.name=="KAROL ANDREA CORREDOR GUEVARA"){
                nameKarol = element.name;
                passKarol = element.password;
                userKarol = element.username;
                r1Karol = element.regaloOne;
                r2Karol = element.regaloTwo;
                r3Karol = element.regaloThree;
                asKarol = element.secret;
                indexKarol = index;

            }
            
            if(element.name=="HELEN DAYANA ROJAS CORREDOR"){
                nameHelen = element.name;
                passHelen = element.password;
                userHelen = element.username;
                r1Helen = element.regaloOne;
                r2Helen = element.regaloTwo;
                r3Helen = element.regaloThree;
                asHelen = element.secret;
                indexHelen = index;

            }
            if(element.name=="LUISA FERNANDA CORREDOR GUEVARA"){
                nameLuisa = element.name;
                passLuisa = element.password;
                userLuisa = element.username;
                r1Luisa = element.regaloOne;
                r2Luisa = element.regaloTwo;
                r3Luisa = element.regaloThree;
                asLuisa = element.secret;
                indexLuisa = index;

            }
            if(element.name=="JOAQUIN VELANDIA CORREDOR"){
                nameJoaquin = element.name;
                passJoaquin = element.password;
                userJoaquin = element.username;
                r1Joaquin = element.regaloOne;
                r2Joaquin = element.regaloTwo;
                r3Joaquin = element.regaloThree;
                asJoaquin = element.secret;
                indexJoaquin = index;

            }
            if(element.name=="MAGDA LUZ CORREDOR GUEVARA"){
                nameMagda = element.name;
                passMagda = element.password;
                userMagda = element.username;
                r1Magda = element.regaloOne;
                r2Magda = element.regaloTwo;
                r3Magda = element.regaloThree;
                asMagda = element.secret;
                indexMagda = index;

            }
            if(element.name=="RITA HURTADO CORREDOR"){
                nameRita = element.name;
                passRita = element.password;
                userRita = element.username;
                r1Rita = element.regaloOne;
                r2Rita = element.regaloTwo;
                r3Rita = element.regaloThree;
                asRita = element.secret;
                indexRita = index;

            }
            if(element.name=="LUZ JENNY CORREDOR GUEVARA"){
                nameJenny = element.name;
                passJenny = element.password;
                userJenny = element.username;
                r1Jenny = element.regaloOne;
                r2Jenny = element.regaloTwo;
                r3Jenny = element.regaloThree;
                asJenny = element.secret;
                indexJenny = index;

            }
            if(element.name=="LUIS RODRIGO TELLEZ"){
                nameRodrigo = element.name;
                passRodrigo = element.password;
                userRodrigo = element.username;
                r1Rodrigo = element.regaloOne;
                r2Rodrigo = element.regaloTwo;
                r3Rodrigo = element.regaloThree;
                asRodrigo = element.secret;
                indexRodrigo = index;

            }
            if(element.name=="SANTIAGO TELLEZ CORREDOR"){
                nameSantiago = element.name;
                passSantiago = element.password;
                userSantiago = element.username;
                r1Santiago = element.regaloOne;
                r2Santiago = element.regaloTwo;
                r3Santiago = element.regaloThree;
                asSantiago = element.secret;
                indexSantiago = index;

            }
            if(element.name=="SEBASTIAN TELLEZ CORREDOR"){
                nameSebastian = element.name;
                passSebastian = element.password;
                userSebastian = element.username;
                r1Sebastian = element.regaloOne;
                r2Sebastian = element.regaloTwo;
                r3Sebastian = element.regaloThree;
                asSebastian = element.secret;
                indexSebastian = index;

            }
            if(element.name=="PAOLA RIVERA VARGAS"){
                namePaola = element.name;
                passPaola = element.password;
                userPaola = element.username;
                r1Paola = element.regaloOne;
                r2Paola = element.regaloTwo;
                r3Paola = element.regaloThree;
                asPaola = element.secret;
                indexPaola = index;

            }
            if(element.name=="MARCELA CORREDOR GUEVARA"){
                nameMarcela = element.name;
                passMarcela = element.password;
                userMarcela = element.username;
                r1Marcela = element.regaloOne;
                r2Marcela = element.regaloTwo;
                r3Marcela = element.regaloThree;
                asMarcela = element.secret;
                indexMarcela = index;

            }
            if(element.name=="SAÚL GONZÁLEZ" || element.name=="SAUL GONZALEZ"){
                nameSaul = element.name;
                passSaul = element.password;
                userSaul = element.username;
                r1Saul = element.regaloOne;
                r2Saul = element.regaloTwo;
                r3Saul = element.regaloThree;
                asSaul = element.secret;
                indexSaul = index;

            }
            if(element.name=="HANNE CAMILA SIERRA CORREDOR"){
                nameHanne = element.name;
                passHanne = element.password;
                userHanne = element.username;
                r1Hanne = element.regaloOne;
                r2Hanne = element.regaloTwo;
                r3Hanne = element.regaloThree;
                asHanne = element.secret;
                indexHanne = index;

            }
            if(element.name=="JOHAN ANDRES SIERRA CORREDOR"){
                nameJohan = element.name;
                passJohan = element.password;
                userJohan = element.username;
                r1Johan = element.regaloOne;
                r2Johan = element.regaloTwo;
                r3Johan = element.regaloThree;
                asJohan = element.secret;
                indexJohan = index;

            }
            if(element.name=="JONATHAN DAVID SIERRA CORREDOR"){
                nameJonathan = element.name;
                passJonathan = element.password;
                userJonathan = element.username;
                r1Jonathan = element.regaloOne;
                r2Jonathan = element.regaloTwo;
                r3Jonathan = element.regaloThree;
                asJonathan = element.secret;
                indexJonathan = index;

            }
            if(element.name=="ABUELITA LUCERO"){
                nameLucero = element.name;
                passLucero = element.password;
                userLucero = element.username;
                r1Lucero = element.regaloOne;
                r2Lucero = element.regaloTwo;
                r3Lucero = element.regaloThree;
                asLucero = element.secret;
                indexLucero = index;

            }
            if(element.name=="ABUELITO CARLOS"){
                nameCarlos = element.name;
                passCarlos = element.password;
                userCarlos = element.username;
                r1Carlos = element.regaloOne;
                r2Carlos = element.regaloTwo;
                r3Carlos = element.regaloThree;
                asCarlos = element.secret;
                indexCarlos = index;

            }

        });
    }

}

const adminUser = ()=>{
    arrayAdmin = egroj.map(item => item);

    let db = arrayAdmin.forEach((element)=> {
        userAdmin = element.admin.username;
        passAdmin = element.admin.password;
    })

}

function credenciales(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;    

    if(userAdmin==username && passAdmin==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {


            userLogin = userAdmin;
            passLogin = passAdmin;
            nameLogin = nameJorge;

            loginIn.style.display = "none";
            opcionesfalsas.style.display = "none";
            
            view.style.display = "block";
            opcionesAdmin.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";
            
            
            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();
            
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenido Administrador '+ nameJorge,
                showConfirmButton: false,
                timer: 1200
              })

            Informacion();

        }
        
    })
    
    }
    
    else if(userJorge==username && passJorge==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {

            userLogin = userJorge;
            passLogin = passJorge;
            nameLogin = nameJorge;
            r1Login = r1Jorge;
            r2Login = r2Jorge;
            r3Login = r3Jorge;
            secretlogin = asJorge;
            indexLogin = indexJorge;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";
            
            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenido '+ nameJorge,
                showConfirmButton: false,
                timer: 1200
            })

            Informacion();
                        
        }
        
    })
    
    }
    
    else if(userAura==username && passAura==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userAura;
            passLogin = passAura;
            nameLogin = nameAura;
            r1Login = r1Aura;
            r2Login = r2Aura;
            r3Login = r3Aura;
            secretlogin = asAura;
            indexLogin = indexAura;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenida '+ nameAura,
                showConfirmButton: false,
                timer: 1200
              })

            Informacion();

        }

        
    })

    }
    
    else if(userKarol==username && passKarol==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userKarol;
            passLogin = passKarol;
            nameLogin = nameKarol;
            r1Login = r1Karol;
            r2Login = r2Karol;
            r3Login = r3Karol;
            secretlogin = asKarol;
            indexLogin = indexKarol;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenida '+ nameKarol,
                showConfirmButton: false,
                timer: 1200
              })
            
            Informacion();
            
        }
        
    })

    }
    
    else if(userHelen==username && passHelen==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userHelen;
            passLogin = passHelen;
            nameLogin = nameHelen;
            r1Login = r1Helen;
            r2Login = r2Helen;
            r3Login = r3Helen;
            secretlogin = asHelen;
            indexLogin = indexHelen;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenida '+ nameHelen,
                showConfirmButton: false,
                timer: 1200
            })
            
            Informacion();
            
        }
        
    })

    }
    
    else if(userLuisa==username && passLuisa==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userLuisa;
            passLogin = passLuisa;
            nameLogin = nameLuisa;
            r1Login = r1Luisa;
            r2Login = r2Luisa;
            r3Login = r3Luisa;
            secretlogin = asLuisa;
            indexLogin = indexLuisa;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenida '+ nameLuisa,
                showConfirmButton: false,
                timer: 1200
            })
            
            Informacion();

        }
        
    })

    }
    
    else if(userJoaquin==username && passJoaquin==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userJoaquin;
            passLogin = passJoaquin;
            nameLogin = nameJoaquin;
            r1Login = r1Joaquin;
            r2Login = r2Joaquin;
            r3Login = r3Joaquin;
            secretlogin = asJoaquin;
            indexLogin = indexJoaquin;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenido '+ nameJoaquin,
                showConfirmButton: false,
                timer: 1200
            })
            
            Informacion();

        }
        
    })

    }
    
    else if(userMagda==username && passMagda==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userMagda;
            passLogin = passMagda;
            nameLogin = nameMagda;
            r1Login = r1Magda;
            r2Login = r2Magda;
            r3Login = r3Magda;
            secretlogin = asMagda;
            indexLogin = indexMagda;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenida '+ nameMagda,
                showConfirmButton: false,
                timer: 1200
            })
            
            Informacion();

        }
        
    })

    }
    
    else if(userRita==username && passRita==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userRita;
            passLogin = passRita;
            nameLogin = nameRita;
            r1Login = r1Rita;
            r2Login = r2Rita;
            r3Login = r3Rita;
            secretlogin = asRita;
            indexLogin = indexRita;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenida '+ nameRita,
                showConfirmButton: false,
                timer: 1200
            })
            
            Informacion();

        }
        
    })

    }
    
    else if(userJenny==username && passJenny==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userJenny;
            passLogin = passJenny;
            nameLogin = nameJenny;
            r1Login = r1Jenny;
            r2Login = r2Jenny;
            r3Login = r3Jenny;
            secretlogin = asJenny;
            indexLogin = indexJenny;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenida '+ nameJenny,
                showConfirmButton: false,
                timer: 1200
            })
            
            Informacion();

        }
        
    })

    }
    
    else if(userRodrigo==username && passRodrigo==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userRodrigo;
            passLogin = passRodrigo;
            nameLogin = nameRodrigo;
            r1Login = r1Rodrigo;
            r2Login = r2Rodrigo;
            r3Login = r3Rodrigo;
            secretlogin = asRodrigo;
            indexLogin = indexRodrigo;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenido '+ nameRodrigo,
                showConfirmButton: false,
                timer: 1200
            })
            
            Informacion();

        }
        
    })

    }
    
    else if(userSantiago==username && passSantiago==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userSantiago;
            passLogin = passSantiago;
            nameLogin = nameSantiago;
            r1Login = r1Santiago;
            r2Login = r2Santiago;
            r3Login = r3Santiago;
            secretlogin = asSantiago;
            indexLogin = indexSantiago;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenido '+ nameSantiago,
                showConfirmButton: false,
                timer: 1200
            })
            
            Informacion();

        }
        
    })

    }
    
    else if(userSebastian==username && passSebastian==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userSebastian;
            passLogin = passSebastian;
            nameLogin = nameSebastian;
            r1Login = r1Sebastian;
            r2Login = r2Sebastian;
            r3Login = r3Sebastian;
            secretlogin = asSebastian;
            indexLogin = indexSebastian;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenido '+ nameSebastian,
                showConfirmButton: false,
                timer: 1200
            })
            
            Informacion();

        }
        
    })

    }
    
    else if(userPaola==username && passPaola==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userPaola;
            passLogin = passPaola;
            nameLogin = namePaola;
            r1Login = r1Paola;
            r2Login = r2Paola;
            r3Login = r3Paola;
            secretlogin = asPaola;
            indexLogin = indexPaola;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenida '+ namePaola,
                showConfirmButton: false,
                timer: 1200
            })
            
            Informacion();

        }
        
    })

    }
    
    else if(userMarcela==username && passMarcela==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userMarcela;
            passLogin = passMarcela;
            nameLogin = nameMarcela;
            r1Login = r1Marcela;
            r2Login = r2Marcela;
            r3Login = r3Marcela;
            secretlogin = asMarcela;
            indexLogin = indexMarcela;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenida '+ nameMarcela,
                showConfirmButton: false,
                timer: 1200
            })
            
            Informacion();

        }
        
    })

    }
    
    else if(userSaul==username && passSaul==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userSaul;
            passLogin = passSaul;
            nameLogin = nameSaul;
            r1Login = r1Saul;
            r2Login = r2Saul;
            r3Login = r3Saul;
            secretlogin = asSaul;
            indexLogin = indexSaul;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenido '+ nameSaul,
                showConfirmButton: false,
                timer: 1200
            })
            
            Informacion();

        }
        
    })

    }
    
    else if(userHanne==username && passHanne==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userHanne;
            passLogin = passHanne;
            nameLogin = nameHanne;
            r1Login = r1Hanne;
            r2Login = r2Hanne;
            r3Login = r3Hanne;
            secretlogin = asHanne;
            indexLogin = indexHanne;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenida '+ nameHanne,
                showConfirmButton: false,
                timer: 1200
            })
            
            Informacion();

        }
        
    })

    }
    
    else if(userJohan==username && passJohan==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userJohan;
            passLogin = passJohan;
            nameLogin = nameJohan;
            r1Login = r1Johan;
            r2Login = r2Johan;
            r3Login = r3Johan;
            secretlogin = asJohan;
            indexLogin = indexJohan;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenido '+ nameJohan,
                showConfirmButton: false,
                timer: 1200
            })
            
            Informacion();

        }
        
    })

    }
    
    else if(userJonathan==username && passJonathan==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userJonathan;
            passLogin = passJonathan;
            nameLogin = nameJonathan;
            r1Login = r1Jonathan;
            r2Login = r2Jonathan;
            r3Login = r3Jonathan;
            secretlogin = asJonathan;
            indexLogin = indexJonathan;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenido '+ nameJonathan,
                showConfirmButton: false,
                timer: 1200
            })
            
            Informacion();

        }
        
    })

    }
    
    else if(userLucero==username && passLucero==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userLucero;
            passLogin = passLucero;
            nameLogin = nameLucero;
            r1Login = r1Lucero;
            r2Login = r2Lucero;
            r3Login = r3Lucero;
            secretlogin = asLucero;
            indexLogin = indexLucero;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenida '+ nameLucero,
                showConfirmButton: false,
                timer: 1200
            })
            
            Informacion();

        }
        
    })

    }
    
    else if(userCarlos==username && passCarlos==password){

        let timerInterval
        Swal.fire({
        title: '¡ Atenticando !',
        html: 'Iniciando sesión ...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            // const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            // b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
            userLogin = userCarlos;
            passLogin = passCarlos;
            nameLogin = nameCarlos;
            r1Login = r1Carlos;
            r2Login = r2Carlos;
            r3Login = r3Carlos;
            secretlogin = asCarlos;
            indexLogin = indexCarlos;

            loginIn.style.display = "none";
            view.style.display = "block";
            opcionesAdmin.style.display = "none";
            opcionesfalsas.style.display = "block";
            signUp.style.display = "block";
            amigoSecreto.style.display = "block";

            let newName = document.getElementById('name').value = nameLogin;
            let newPass = document.getElementById('pass').value = passLogin;
            let newUser = document.getElementById("user").value = userLogin;
            let newRegaloOne = document.getElementById("regaloOne").value = r1Login;
            let newRegaloTwo = document.getElementById("regaloTwo").value = r2Login;
            let newRegaloThree = document.getElementById("regaloThree").value = r3Login;

            winAudio.play();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Bienvenido '+ nameCarlos,
                showConfirmButton: false,
                timer: 1200
            })
            
            Informacion();

        }
        
    })

    }
    else{

        clearLogIn();

        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Usuario o Contraseña invalida',
            showConfirmButton: false,
            timer: 1200
          })

        wrongAudio.play();
    }
}

const deleteUser = (userInput) => {

    let indexArray;

    arrayUser.forEach((element, index) => {

        if(element.username==userInput){
            indexArray = index;
            console.log(index)
        }

    })

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed){
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
        );
        arrayUser.splice(indexArray, 1);
        guardarDB(arrayUser);
        }
    })

}

const updateUser = (userLogin) => {

    let indexArray = arrayUser.findIndex((element)=>{
        return element.username == userLogin;
    });

    // console.log(arrayUser[indexArray].username);

    // let newName = arrayUser[indexArray].name;
    let newPass = document.getElementById('pass').value;
    let newUser = document.getElementById("user").value;
    let newRegaloOne = document.getElementById("regaloOne").value;
    let newRegaloTwo = document.getElementById("regaloTwo").value;
    let newRegaloThree = document.getElementById("regaloThree").value;

    // arrayUser[indexArray].name = newName;
    arrayUser[indexArray].password = newPass;
    arrayUser[indexArray].username = newUser;
    arrayUser[indexArray].regaloOne = newRegaloOne;
    arrayUser[indexArray].regaloTwo = newRegaloTwo;
    arrayUser[indexArray].regaloThree = newRegaloThree;

    guardarDB(arrayUser);
    
}

const updateUserAdmin = (userInput) => {

    let indexArray;

    arrayUser.forEach((element, index) => {

        if(element.username==userInput){
            indexArray = index;
            console.log(index)
        }

    })

    let amigoEncontrado;

    if(indexArray=indexLogin && arrayUser[indexArray].name==nameJorge){
        secretlogin = asJorge;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==nameAura){
        secretlogin = asAura;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==nameLucero){
        secretlogin = asLucero;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==nameCarlos){
        secretlogin = asCarlos;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==nameKarol){
        secretlogin = asKarol;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==nameHelen){
        secretlogin = asHelen;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==nameLuisa){
        secretlogin = asLuisa;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==nameJoaquin){
        secretlogin = asJoaquin;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==nameMagda){
        secretlogin = asMagda;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==nameRita){
        secretlogin = asMagda;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==nameJenny){
        secretlogin = asJenny;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==nameRodrigo){
        secretlogin = asRodrigo;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==namePaola){
        secretlogin = asPaola;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==nameSantiago){
        secretlogin = asSantiago;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==nameSebastian){
        secretlogin = asSebastian;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==nameMarcela){
        secretlogin = asMarcela;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==nameSaul){
        secretlogin = asSaul;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==nameJohan){
        secretlogin = asJohan;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==nameJonathan){
        secretlogin = asJonathan;
        amigoEncontrado = secretlogin;
    }
    else if(indexArray=indexLogin && arrayUser[indexArray].name==nameHanne){
        secretlogin = asHanne;
        amigoEncontrado = secretlogin;
    }
    else{
        amigoEncontrado = "No Definido";
    }

    let newName = arrayUser[indexArray].name;
    let newPass = document.getElementById('pass').value;
    let newUser = document.getElementById("user").value;
    let newRegaloOne = document.getElementById("regaloOne").value;
    let newRegaloTwo = document.getElementById("regaloTwo").value;
    let newRegaloThree = document.getElementById("regaloThree").value;

    arrayUser[indexArray].name = newName;
    arrayUser[indexArray].password = newPass;
    arrayUser[indexArray].username = newUser;
    arrayUser[indexArray].regaloOne = newRegaloOne;
    arrayUser[indexArray].regaloTwo = newRegaloTwo;
    arrayUser[indexArray].regaloThree = newRegaloThree;
    arrayUser[indexArray].secret = amigoEncontrado;

    guardarDB(arrayUser);

    ClearCamp();

}

const getUserAdmin = (userInput, nameInput) => {

    let indexArray;

    arrayUser.forEach((element, index) => {

        if(element.username==userInput || element.name==nameInput){
            indexArray = index;
            console.log(index)


            let name = document.getElementById('name').value = "";
            let pass = document.getElementById("pass").value = "";
            let user = document.getElementById("user").value = "";
            let regaloOne = document.getElementById("regaloOne").value = "";
            let regaloTwo = document.getElementById("regaloTwo").value = "";
            let regaloThree = document.getElementById("regaloThree").value = "";
        
            let getName = arrayUser[indexArray].name;
            let getPass = arrayUser[indexArray].password;
            let getUser = arrayUser[indexArray].username;
            let getRegaloOne = arrayUser[indexArray].regaloOne;
            let getRegaloTwo = arrayUser[indexArray].regaloTwo;
            let getRegaloThree = arrayUser[indexArray].regaloThree;
        
            name = document.getElementById('name').value = getName;
            pass = document.getElementById("pass").value = getPass;
            user = document.getElementById("user").value = getUser;
            regaloOne = document.getElementById("regaloOne").value = getRegaloOne;
            regaloTwo = document.getElementById("regaloTwo").value = getRegaloTwo;
            regaloThree = document.getElementById("regaloThree").value = getRegaloThree;

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Consulta Realizada con Exíto',
                showConfirmButton: false,
                timer: 1200
            })
            
        }
        else{
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Usuario no Existe',
                showConfirmButton: false,
                timer: 1200
              })
        }

    })


}

function ClearCamp(){
    let name = document.getElementById('name').value = "";
    let pass = document.getElementById("pass").value = "";
    let user = document.getElementById("user").value = "";
    let regaloOne = document.getElementById("regaloOne").value = "";
    let regaloTwo = document.getElementById("regaloTwo").value = "";
    let regaloThree = document.getElementById("regaloThree").value = "";

}

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

function random(todos){
    
    ac = [];

    let cont=0;
    
    while(cont==0){
        var a1 = todos.sample();
        var a2 = todos.sample();
        var a3 = todos.sample();
        var a4 = todos.sample();
        var a5 = todos.sample();
        var a6 = todos.sample();
        var a7 = todos.sample();
        var a8 = todos.sample();
               
        if (a1 != "ABUELITA LUCERO" && a1 != "ABUELITO CARLOS" && a1 != "KAROL ANDREA CORREDOR GUEVARA" && a1 != "HELEN DAYANA ROJAS CORREDOR" && a1 != "LUISA FERNANDA CORREDOR GUEVARA" && a1 != "JOAQUIN VELANDIA CORREDOR" 
                && a1 != "AURA MILENA CORREDOR GUEVARA" && a1 != "JORGE EDILSON VEGA ACOSTA" && a2 != "ABUELITA LUCERO" && a2 != "ABUELITO CARLOS" && a2 != "KAROL ANDREA CORREDOR GUEVARA" && a2 != "HELEN DAYANA ROJAS CORREDOR" && a2 != "LUISA FERNANDA CORREDOR GUEVARA"
                && a2 != "JOAQUIN" && a2 != "AURA MILENA CORREDOR GUEVARA" && a2 != "JORGE EDILSON VEGA ACOSTA" 
                && a3 != "ABUELITA LUCERO" && a3 != "ABUELITO CARLOS" && a3 != "KAROL ANDREA CORREDOR GUEVARA" && a3 != "HELEN DAYANA ROJAS CORREDOR" && a3 != "LUISA FERNANDA CORREDOR GUEVARA" 
                && a3 != "JOAQUIN" && a3 != "AURA MILENA CORREDOR GUEVARA" && a3 != "JORGE EDILSON VEGA ACOSTA" 
                && a4 != "ABUELITA LUCERO" && a4 != "ABUELITO CARLOS" && a4 != "KAROL ANDREA CORREDOR GUEVARA" && a4 != "HELEN DAYANA ROJAS CORREDOR" && a4 != "LUISA FERNANDA CORREDOR GUEVARA" 
                && a4 != "JOAQUIN" && a4 != "AURA MILENA CORREDOR GUEVARA" && a4 != "JORGE EDILSON VEGA ACOSTA"
                && a5 != "ABUELITA LUCERO" && a5 != "ABUELITO CARLOS" && a5 != "KAROL ANDREA CORREDOR GUEVARA" && a5 != "HELEN DAYANA ROJAS CORREDOR" && a5 != "LUISA FERNANDA CORREDOR GUEVARA"
                && a5 != "JOAQUIN" && a5 != "AURA MILENA CORREDOR GUEVARA" && a5 != "JORGE EDILSON VEGA ACOSTA"
                && a6 != "ABUELITA LUCERO" && a6 != "ABUELITO CARLOS" && a6 != "KAROL ANDREA CORREDOR GUEVARA" && a6 != "HELEN DAYANA ROJAS CORREDOR" && a6 != "LUISA FERNANDA CORREDOR GUEVARA"
                && a6 != "JOAQUIN" && a6 != "AURA MILENA CORREDOR GUEVARA" && a6 != "JORGE EDILSON VEGA ACOSTA"
                && a7 != "ABUELITA LUCERO" && a7 != "ABUELITO CARLOS" && a7 != "KAROL ANDREA CORREDOR GUEVARA" && a7 != "HELEN DAYANA ROJAS CORREDOR" && a7 != "LUISA FERNANDA CORREDOR GUEVARA"
                && a7 != "JOAQUIN" && a7 != "AURA MILENA CORREDOR GUEVARA" && a7 != "JORGE EDILSON VEGA ACOSTA"
                && a8 != "ABUELITA LUCERO" && a8 != "ABUELITO CARLOS" && a8 != "KAROL ANDREA CORREDOR GUEVARA" && a8 != "HELEN DAYANA ROJAS CORREDOR" && a8 != "LUISA FERNANDA CORREDOR GUEVARA"
                && a8 != "JOAQUIN" && a8 != "AURA MILENA CORREDOR GUEVARA" && a8 != "JORGE EDILSON VEGA ACOSTA"
                    
                && a1 != a2 && a1 != a3 && a1 != a4 && a1 != a5 && a1 != a6 && a1 != a7 && a1 != a8
                && a2 != a3 && a2 != a4 && a2 != a5 && a2 != a6 && a2 != a7 && a2 != a8 
                && a3 != a4 && a3 != a5 && a3 != a6 && a3 != a7 && a3 != a8
                && a4 != a5 && a4 != a6 && a4 != a7 && a4 != a8
                && a5 != a6 && a5 != a7 && a5 != a8
                && a6 != a7 && a6 != a8
                && a7 != a8){
            
            asLucero = a1;
            asCarlos = a2;
            asLuisa = a3;
            asJoaquin = a4;
            asHelen = a5;
            asKarol = a6;
            asAura = a7;
            asJorge = a8;
            
            ac.push(a1);
            ac.push(a2);
            ac.push(a3);
            ac.push(a4);
            ac.push(a5);
            ac.push(a6);
            ac.push(a7);
            ac.push(a8);
            
            cont = 1;
        }
    }
    
    
    ah = [];

    let cont2=0;
    
    while (cont2==0){
        var a1 = todos.sample();
        var a2 = todos.sample();
        
        if (a1 != "MAGDA LUZ CORREDOR GUEVARA" && a1 != "RITA HURTADO CORREDOR" && a2 != "MAGDA LUZ CORREDOR GUEVARA" && a2 != "RITA HURTADO CORREDOR" && a1 != a2
            && !ac.includes(a1) && !ac.includes(a2)){
            
            asMagda = a1;
            asRita = a2;

            ah.push(a1);
            ah.push(a2);

            cont2 = 1
        }
    }
    
    
    at = [];
    
    let cont3=0;

    while (cont3==0){
        var a1 = todos.sample();
        var a2 = todos.sample();
        var a3 = todos.sample();
        var a4 = todos.sample();
        var a5 = todos.sample();

        if (a1 != "LUZ JENNY CORREDOR GUEVARA" && a1 != "LUIS RODRIGO TELLEZ" && a1 != "PAOLA RIVERA VARGAS" && a1 != "SANTIAGO TELLEZ CORREDOR" && a1 != "SEBASTIAN TELLEZ CORREDOR" 
            && a2 != "LUZ JENNY CORREDOR GUEVARA" && a2 != "LUIS RODRIGO TELLEZ" && a2 != "PAOLA RIVERA VARGAS" && a2 != "SANTIAGO TELLEZ CORREDOR" && a2 != "SEBASTIAN TELLEZ CORREDOR" 
                
            && a3 != "LUZ JENNY CORREDOR GUEVARA" && a3 != "LUIS RODRIGO TELLEZ" && a3 != "PAOLA RIVERA VARGAS" && a3 != "SANTIAGO TELLEZ CORREDOR" && a3 != "SEBASTIAN TELLEZ CORREDOR" 
                
            && a4 != "LUZ JENNY CORREDOR GUEVARA" && a4 != "LUIS RODRIGO TELLEZ" && a4 != "PAOLA RIVERA VARGAS" && a4 != "SANTIAGO TELLEZ CORREDOR" && a4 != "SEBASTIAN TELLEZ CORREDOR" 
                
            && a5 != "LUZ JENNY CORREDOR GUEVARA" && a5 != "LUIS RODRIGO TELLEZ" && a5 != "PAOLA RIVERA VARGAS" && a5 != "SANTIAGO TELLEZ CORREDOR" && a5 != "SEBASTIAN TELLEZ CORREDOR" 
                
            && a1 != a2 && a1 != a3 && a1 != a4 && a1 != a5 
            && a2 != a3 && a2 != a4 && a2 != a5  
            && a3 != a4 && a3 != a5 
            && a4 != a5
                
            && !ac.includes(a1) && !ac.includes(a2) && !ac.includes(a3) && !ac.includes(a4) && !ac.includes(a5)
            && !ah.includes(a1) && !ah.includes(a2) && !ah.includes(a3) && !ah.includes(a4) && !ah.includes(a5)){
            
            
            asJenny = a1;
            asPaola = a2;
            asRodrigo = a3;
            asSebastian = a4;
            asSantiago = a5;

            at.push(a1);
            at.push(a2);
            at.push(a3);
            at.push(a4);
            at.push(a5);

            cont3 = 1;
        }
    }
    
    
    asc = [];

    let cont4=0

    while (cont4==0){
        var a1 = todos.sample();
        var a2 = todos.sample();
        var a3 = todos.sample();
        var a4 = todos.sample();
        var a5 = todos.sample();

        if (a1 != "MARCELA CORREDOR GUEVARA" && a1 != "SAÚL GONZÁLEZ" && a1 != "HANNE CAMILA SIERRA CORREDOR" && a1 != "JOHAN ANDRES SIERRA CORREDOR" && a1 != "JONATHAN DAVID SIERRA CORREDOR" 

            && a2 != "MARCELA CORREDOR GUEVARA" && a2 != "SAÚL GONZÁLEZ" && a2 != "HANNE CAMILA SIERRA CORREDOR" && a2 != "JOHAN ANDRES SIERRA CORREDOR" && a2 != "JONATHAN DAVID SIERRA CORREDOR"

            && a3 != "MARCELA CORREDOR GUEVARA" && a3 != "SAÚL GONZÁLEZ" && a3 != "HANNE CAMILA SIERRA CORREDOR" && a3 != "JOHAN ANDRES SIERRA CORREDOR" && a3 != "JONATHAN DAVID SIERRA CORREDOR" 

            && a4 != "MARCELA CORREDOR GUEVARA" && a4 != "SAÚL GONZÁLEZ" && a4 != "HANNE CAMILA SIERRA CORREDOR" && a4 != "JOHAN ANDRES SIERRA CORREDOR" && a4 != "JONATHAN DAVID SIERRA CORREDOR" 

            && a5 != "MARCELA CORREDOR GUEVARA" && a5 != "SAÚL GONZÁLEZ" && a5 != "HANNE CAMILA SIERRA CORREDOR" && a5 != "JOHAN ANDRES SIERRA CORREDOR" && a5 != "JONATHAN DAVID SIERRA CORREDOR"

            && a1 != a2 && a1 != a3 && a1 != a4 && a1 != a5
            && a2 != a3 && a2 != a4 && a2 != a5  
            && a3 != a4 && a3 != a5 
            && a4 != a5
            
            && !ac.includes(a1) && !ac.includes(a2) && !ac.includes(a3) && !ac.includes(a4) && !ac.includes(a5)
            && !ah.includes(a1) && !ah.includes(a2) && !ah.includes(a3) && !ah.includes(a4) && !ah.includes(a5)
            && !at.includes(a1) && !at.includes(a2) && !at.includes(a3) && !at.includes(a4) && !at.includes(a5)){
            
            asMarcela = a1;
            asSaul = a2;
            asHanne = a3;
            asJohan = a4;
            asJonathan = a5;

            asc.push(a1);
            asc.push(a2);
            asc.push(a3);
            asc.push(a4);
            asc.push(a5);
            
            cont4 = 1;
        }
    }
    
    return 1;

}

// const playAppAdmin = () => {

//     arrayUser[indexJorge].secret = asJorge;
//     arrayUser[indexAura].secret = asAura;
//     arrayUser[indexLucero].secret = asLucero;
//     arrayUser[indexCarlos].secret = asCarlos;
//     arrayUser[indexKarol].secret = asKarol;
//     arrayUser[indexHelen].secret = asHelen;
//     arrayUser[indexLuisa].secret = asLuisa;
//     arrayUser[indexJoaquin].secret = asJoaquin;
//     arrayUser[indexMagda].secret = asMagda;
//     arrayUser[indexRita].secret = asRita;
//     arrayUser[indexJenny].secret = asJenny;
//     arrayUser[indexRodrigo].secret = asRodrigo;
//     arrayUser[indexPaola].secret = asPaola;
//     arrayUser[indexSantiago].secret = asSantiago;
//     arrayUser[indexSebastian].secret = asSebastian;
//     arrayUser[indexMarcela].secret = asMarcela;
//     arrayUser[indexSaul].secret = asSaul;
//     arrayUser[indexHanne].secret = asHanne;
//     arrayUser[indexJohan].secret = asJohan;
//     arrayUser[indexJonathan].secret = asJonathan;

//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'Amigos Secretos Asignados',
//         showConfirmButton: false,
//         timer: 1200
//       })    

// }

const resetGame = () => {

    ac = [];
    ah = [];
    at = [];
    asc = [];

    arrayUser[indexJorge].secret = "";
    arrayUser[indexAura].secret = "";
    arrayUser[indexLucero].secret = "";
    arrayUser[indexCarlos].secret = "";
    arrayUser[indexKarol].secret = "";
    arrayUser[indexHelen].secret = "";
    arrayUser[indexLuisa].secret = "";
    arrayUser[indexJoaquin].secret = "";
    arrayUser[indexMagda].secret = "";
    arrayUser[indexRita].secret = "";
    arrayUser[indexJenny].secret = "";
    arrayUser[indexRodrigo].secret = "";
    arrayUser[indexPaola].secret = "";
    arrayUser[indexSantiago].secret = "";
    arrayUser[indexSebastian].secret = "";
    arrayUser[indexMarcela].secret = "";
    arrayUser[indexSaul].secret = "";
    arrayUser[indexHanne].secret = "";
    arrayUser[indexJohan].secret = "";
    arrayUser[indexJonathan].secret = "";

    guardarDB(arrayUser);

    ClearCamp();

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Amigos Secretos Reseteados',
        showConfirmButton: false,
        timer: 1200
      })    

}

export let amigo = "" 
export let amigoR1 = "" 
export let amigoR2 = "" 
export let amigoR3 = "" 

const Informacion = ()=> {
    
    if(arrayUser[indexLogin].secret == nameJorge){
        amigo = nameJorge;
        amigoR1 = r1Jorge;
        amigoR2 = r2Jorge;
        amigoR3 = r3Jorge;
    }
    else if(arrayUser[indexLogin].secret == nameAura){
        amigo = nameAura;
        amigoR1 = r1Aura;
        amigoR2 = r2Aura;
        amigoR3 = r3Aura;
    }
    else if(arrayUser[indexLogin].secret == nameLucero){
        amigo = nameLucero;
        amigoR1 = r1Lucero;
        amigoR2 = r2Lucero;
        amigoR3 = r3Lucero;
    }
    else if(arrayUser[indexLogin].secret == nameCarlos){
        amigo = nameCarlos;
        amigoR1 = r1Carlos;
        amigoR2 = r2Carlos;
        amigoR3 = r3Carlos;
    }
    else if(arrayUser[indexLogin].secret == nameLuisa){
        amigo = nameLuisa;
        amigoR1 = r1Luisa;
        amigoR2 = r2Luisa;
        amigoR3 = r3Luisa;
    }
    else if(arrayUser[indexLogin].secret == nameJoaquin){
        amigo = nameJoaquin;
        amigoR1 = r1Joaquin;
        amigoR2 = r2Joaquin;
        amigoR3 = r3Joaquin;
    }
    else if(arrayUser[indexLogin].secret == nameKarol){
        amigo = nameKarol;
        amigoR1 = r1Karol;
        amigoR2 = r2Karol;
        amigoR3 = r3Karol;
    }
    else if(arrayUser[indexLogin].secret == nameHelen){
        amigo = nameHelen;
        amigoR1 = r1Helen;
        amigoR2 = r2Helen;
        amigoR3 = r3Helen;
    }
    else if(arrayUser[indexLogin].secret == nameMagda){
        amigo = nameMagda;
        amigoR1 = r1Magda;
        amigoR2 = r2Magda;
        amigoR3 = r3Magda;
    }
    else if(arrayUser[indexLogin].secret == nameRita){
        amigo = nameRita;
        amigoR1 = r1Rita;
        amigoR2 = r2Rita;
        amigoR3 = r3Rita;
    }
    else if(arrayUser[indexLogin].secret == nameJenny){
        amigo = nameJenny;
        amigoR1 = r1Jenny;
        amigoR2 = r2Jenny;
        amigoR3 = r3Jenny;
    }
    else if(arrayUser[indexLogin].secret == nameRodrigo){
        amigo = nameRodrigo;
        amigoR1 = r1Rodrigo;
        amigoR2 = r2Rodrigo;
        amigoR3 = r3Rodrigo;
    }
    else if(arrayUser[indexLogin].secret == namePaola){
        amigo = namePaola;
        amigoR1 = r1Paola;
        amigoR2 = r2Paola;
        amigoR3 = r3Paola;
    }
    else if(arrayUser[indexLogin].secret == nameSantiago){
        amigo = nameSantiago;
        amigoR1 = r1Santiago;
        amigoR2 = r2Santiago;
        amigoR3 = r3Santiago;
    }
    else if(arrayUser[indexLogin].secret == nameSebastian){
        amigo = nameSebastian;
        amigoR1 = r1Sebastian;
        amigoR2 = r2Sebastian;
        amigoR3 = r3Sebastian;
    }
    else if(arrayUser[indexLogin].secret == nameMarcela){
        amigo = nameMarcela;
        amigoR1 = r1Marcela;
        amigoR2 = r2Marcela;
        amigoR3 = r3Marcela;
    }
    else if(arrayUser[indexLogin].secret == nameSaul){
        amigo = nameSaul;
        amigoR1 = r1Saul;
        amigoR2 = r2Saul;
        amigoR3 = r3Saul;
    }
    else if(arrayUser[indexLogin].secret == nameHanne){
        amigo = nameHanne;
        amigoR1 = r1Hanne;
        amigoR2 = r2Hanne;
        amigoR3 = r3Hanne;
    }
    else if(arrayUser[indexLogin].secret == nameJohan){
        amigo = nameJohan;
        amigoR1 = r1Johan;
        amigoR2 = r2Johan;
        amigoR3 = r3Johan;
    }
    else if(arrayUser[indexLogin].secret == nameJonathan){
        amigo = nameJonathan;
        amigoR1 = r1Jonathan;
        amigoR2 = r2Jonathan;
        amigoR3 = r3Jonathan;
    }
    else{
        amigo = "No Definido";
        amigoR1 = "No Definido";
        amigoR2 = "No definido";
        amigoR3 = "No definido";
    }
}


window.addEventListener('load', startGame)
