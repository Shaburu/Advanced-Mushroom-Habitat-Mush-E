import cv2
import numpy as np

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

def getContours(img):
    contours,hierarchy = cv2.findContours(img,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_NONE)
    for i in contours:
        area = cv2.contourArea(i)
        if area>200:
                    cv2.drawContours(imgContour,i,-1,(0,255,255),3)
                    peri = cv2.arcLength(i,True)
                    # print(peri)
                    approx = cv2.approxPolyDP(i,0.02*peri,True)
                    print(len(approx))
                    objCorner = len(approx)
                    x , y, w, h = cv2.boundingRect(approx)
                    if objCorner ==3 or objCorner<3:objectType = "Triangle"
                    elif objCorner ==4:
                         aspectRatio = w/float(h)
                         if aspectRatio > 0.95 and aspectRatio < 1.05:objectType = "Square"
                         else:objectType="rectangle"
                    else:
                         objectType = "Mushroom"

                    cv2.rectangle(imgContour,(x,y),(x+w,y+h),(255,0,0),2)
                    cv2.putText(imgContour,objectType,
                                (x+(w//2)-10,y+(h//2)),cv2.FONT_HERSHEY_COMPLEX,
                                1,(255,255,255),2)
            

path = "I:/OPEN SOURCE/Brain Tumor OpenCV/opencv-practice-color-numberplate-paint/resources/cordy.png"
img = cv2.imread(path)
imgContour = img.copy()

gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
imgBlur = cv2.GaussianBlur(gray,(7,7),1)
imgCanny = cv2.Canny(imgBlur,50,50)
imgJustContour = cv2.Canny(img,255,23)
getContours(imgCanny)


imgBlank = np.zeros_like(img)
imgStack = stackImages(0.6,([img,gray,imgBlur],
                            [imgCanny,imgContour,imgJustContour]))


cv2.imshow("Original",imgStack)
cv2.waitKey(0)