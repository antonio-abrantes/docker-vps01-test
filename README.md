### Criar a instância a partir da imagem
  `docker build -t tony/dockernode .`
  `sudo docker run -p 3000:3000 -d tony/dockernode`

### Usando o Docker Compose
  `docker-compose up`

### Para rodar a instância em background
  `docker ps -a` Listar os containers e buscar o ID ou o NOME
  `docker start ID` Para iniciar

### Para acessar o terminal da instância do container
  `docker exec -it test-app-docker_app_1 sh`