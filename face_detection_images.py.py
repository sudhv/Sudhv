import cv2
face_cascade=cv2.CascadeClassifier(r"C:\Users\vssja\Downloads\haarcascade_frontalface_default.xml")
img =cv2.imread(r"C:\Users\vssja\Downloads\istockphoto-1368965646-1024x1024.jpg")
gray_img=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)

faces=face_cascade.detectMultiScale(gray_img,1.1,4)

for(x,y,w,h) in faces:
    cv2.rectangle(img,(x,y),(x+w,y+h),(0,255,0),2)

cv2.imshow('detected faces',img)
cv2.waitKey()