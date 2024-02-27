sudo docker build -t localhost:5000/grupo15:latest .
sudo docker tag localhost:5000/grupo15:latest localhost:5000/grupo15:latest
sudo docker push localhost:5000/grupo15:latest

sudo microk8s kubectl delete service grupo15 -n thymeleaf
sudo microk8s kubectl delete deployment grupo15 -n thymeleaf
sudo microk8s kubectl apply -f k8s/deployment.yaml

sudo microk8s kubectl delete ingress grupo15 -n thymeleaf
sudo microk8s kubectl apply -f k8s/ingress.yaml