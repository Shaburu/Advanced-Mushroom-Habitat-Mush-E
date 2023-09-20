import cv2
import numpy as np
print("package imported")

#display img
# img = cv2.imread("I:I:\Github\Advanced-Mushroom-Habitat-Mush-E\flask-server\resources\cordy.png")

# Display Video
# vidCap = cv2.VideoCapture("I:\Github\Advanced-Mushroom-Habitat-Mush-E\flask-server\resources\cordy.png")

# while True:
#     success, img = vidCap.read()
#     cv2.imshow("BLACK VIDEO", img)
#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         break


# WEBCAM
# webcam = cv2.VideoCapture(1)
# webcam.set(3,640)
# webcam.set(4,480)

# while True:
#     success, img = webcam.read()
#     cv2.imshow("BLACK VIDEO", img)
#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         break


img = cv2.imread("I:/Github\Advanced-Mushroom-Habitat-Mush-E/flask-server/resources/amanita.png")
kernel = np.ones((5,5),np.uint8)

imgGray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
blur = cv2.GaussianBlur(imgGray,(7,7), 0)

imgCanny = cv2.Canny(img,100,100)
imgDialation = cv2.dilate(imgCanny,kernel,iterations=1)
imgEroded = cv2.erode(imgDialation,kernel,iterations=1)
imgCresize = cv2.resize(imgCanny,(680,480))
imgDresize = cv2.resize(imgDialation,(680,480))
imgEresize = cv2.resize(imgEroded,(680,480))
print(img .shape)

imgcropped = img[0:200,200:500]

cv2.imshow("cropped",imgcropped)
cv2.imshow("Canny",imgCresize)
cv2.imshow("diallation",imgDresize)
cv2.imshow("Erosion",imgEresize)

cv2.waitKey(0)