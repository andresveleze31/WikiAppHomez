sudo docker build -t localhost:5000/wikihomez:latest .
sudo docker tag localhost:5000/wikihomez:latest localhost:5000/wikihomez:latest
sudo docker push localhost:5000/wikihomez:latest

sudo microk8s kubectl delete service wikihomez -n thymeleaf
sudo microk8s kubectl delete deployment wikihomez -n thymeleaf
sudo microk8s kubectl apply -f k8s/deployment.yaml

sudo microk8s kubectl delete ingress wikihomez -n thymeleaf
sudo microk8s kubectl apply -f k8s/ingress.yaml