import cv2
import numpy as np
print("package imported")

# img = np.zeros((512,512,3),np.uint8)
img = cv2.imread("I:/Github/Advanced-Mushroom-Habitat-Mush-E/flask-server/resources/soft.png")
# print(img.shape)
# img[:]=255,0,0

# cv2.line(img,(0,0),(img.shape[1],img.shape[0]),(0,0,255),2)
# cv2.rectangle(img,(0,0),(250,350),(0,255,0),cv2.FILLED)
# cv2.circle(img,(450,50),30,(255,0,255),5)

# cv2.putText(img,'NIGGER',(340,204),cv2.FONT_HERSHEY_COMPLEX,1,(0,150,0),1)

width,height = 1200,780
pts1 = np.float32([[152,158],[1388,500],[0,755],[1211,1045]])
pts2 = np.float32([[0,0],[width,0],[0,height],[width,height]])
matrix = cv2.getPerspectiveTransform(pts1,pts2)
imgOut = cv2.warpPerspective(img,matrix,(width,height))


cv2.imshow("image1",img)
cv2.imshow("image",imgOut)

cv2.waitKey(0)