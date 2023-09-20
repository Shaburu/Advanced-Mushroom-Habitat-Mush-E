import cv2
import numpy as np

def empty(a):
    pass

def stackImages(scale,imgArray):
    rows = len(imgArray)
    cols = len(imgArray[0])
    rowsAvailable = isinstance(imgArray[0], list)
    width = imgArray[0][0].shape[1]
    height = imgArray[0][0].shape[0]
    if rowsAvailable:
        for x in range ( 0, rows):
            for y in range(0, cols):
                if imgArray[x][y].shape[:2] == imgArray[0][0].shape [:2]:
                    imgArray[x][y] = cv2.resize(imgArray[x][y], (0, 0), None, scale, scale)
                else:
                    imgArray[x][y] = cv2.resize(imgArray[x][y], (imgArray[0][0].shape[1], imgArray[0][0].shape[0]), None, scale, scale)
                if len(imgArray[x][y].shape) == 2: imgArray[x][y]= cv2.cvtColor( imgArray[x][y], cv2.COLOR_GRAY2BGR)
        imageBlank = np.zeros((height, width, 3), np.uint8)
        hor = [imageBlank]*rows
        hor_con = [imageBlank]*rows
        for x in range(0, rows):
            hor[x] = np.hstack(imgArray[x])
        ver = np.vstack(hor)
    else:
        for x in range(0, rows):
            if imgArray[x].shape[:2] == imgArray[0].shape[:2]:
                imgArray[x] = cv2.resize(imgArray[x], (0, 0), None, scale, scale)
            else:
                imgArray[x] = cv2.resize(imgArray[x], (imgArray[0].shape[1], imgArray[0].shape[0]), None,scale, scale)
            if len(imgArray[x].shape) == 2: imgArray[x] = cv2.cvtColor(imgArray[x], cv2.COLOR_GRAY2BGR)
        hor= np.hstack(imgArray)
        ver = hor
    return ver


path = "I:/Github/Advanced-Mushroom-Habitat-Mush-E/flask-server/resources/cordy.png"
img = cv2.imread(path)

cv2.namedWindow("trackbars")
cv2.resizeWindow("trackbars",640,300)
cv2.createTrackbar("Hue Min","trackbars",10,179,empty)
cv2.createTrackbar("Hue Max","trackbars",23,179,empty)
cv2.createTrackbar("Sat Min","trackbars",125,255,empty)
cv2.createTrackbar("Sat Max","trackbars",255,255,empty)
cv2.createTrackbar("Val Min","trackbars",253,253,empty)
cv2.createTrackbar("Val Max","trackbars",255,255,empty)

while True:
    imgHSV = cv2.cvtColor(img,cv2.COLOR_BGR2HSV)
    h_min = cv2.getTrackbarPos("Hue Min","trackbars")
    h_max = cv2.getTrackbarPos("Hue Max","trackbars")
    s_min = cv2.getTrackbarPos("Sat Min","trackbars")
    s_max = cv2.getTrackbarPos("Sat Max","trackbars")
    v_min = cv2.getTrackbarPos("Val Min","trackbars")
    v_max = cv2.getTrackbarPos("Val Max","trackbars")
    print(h_min,h_max,s_min,s_max,v_max,v_min)
    lower = np.array([h_min,s_min,v_min])
    upper = np.array([h_max,s_max,v_max])
    mask = cv2.inRange(imgHSV,lower,upper)

    imgResult = cv2.bitwise_and(img,img,mask=mask)
    
    cv2.imshow("masked",mask)
    cv2.imshow("imgHSV",imgHSV)
    cv2.imshow("Results",imgResult)

    imgStack = stackImages(0.6,([img,imgHSV],[mask,imgResult]))
    cv2.imshow("STACKED",imgStack)
    cv2.waitKey(1)