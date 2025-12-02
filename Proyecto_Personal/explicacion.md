## Crear un repositorio local de GIT. Solo una vez, por proyecto.
git init (inicializamos el repositorio local)

## 3 tipos de estados en Git:
# Untracked - Git no lo tiene
# Staging (Added) - Agregado al repositorio de Git
# Working - Ya versionado por Git

# -> Pasar de Untracked a Staging
git add (nombre del file)
git add index.html
git add .  ## Para subir todo lo del root

# -> Pasar de Staging a Working
git commit -m 'Nombre de Repositorio'

## Comandos de GitHub
echo "# Diplomatura_FullStack_2025" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main    ## Renombra la rama principal de master a main
git remote add origin https://github.com/GarciaPatricioAndres/DiploFullStack_2025.git    ## Añadimos un origen remoto, adonde vamos a subir nuestro codigo.
git push -u origin main   ## Envia el ultimo commit a la rama principal (main), al repo de GitHub.
git status  ## Para saber el estado del trabajo en relacion a Git.
git pull  ## Trae los ultimos cambios directamnete desde el repo de GitHub.