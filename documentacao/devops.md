## Há pipeline CI/CD?
Sim, há um pipeline CI/CD definido no arquivo `.github\workflows\experimento-ci-cd.yml`, que é executado via GitHub Actions em pull requests para a branch `main`.

## Há testes automatizados no pipeline?
Sim, o pipeline inclui um job (`unit-test`) que executa os testes unitários do backend.

## Há uso de containers?
Sim, existem `Dockerfile`s para o backend e frontend, e um arquivo `docker-compose.yml` que orquestra todos os serviços (aplicações e banco de dados), garantindo consistência entre os ambientes.

## Sugestão de melhoria
- Remover variáveis env_file duplicadas no docker-compose. Já é definido um env_file: ./backend/.env, então não precisa repetir manualmente as mesmas variáveis em environment, pois isso gera duplicação e risco de inconsistência.  

- Adicionar cache de dependências no job unit-test para reduzir o tempo de execução do pipeline.