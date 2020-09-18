import json
bucket ="imageprocessing-bucket"
file ="picture1 .j pg"
inputval="{'imageprocessingapp': 'Picture 1.png'}"

inputval=inputval.replace('{'," ")
inputval=inputval.replace('}'," ")
inputval=inputval.replace("'"," ")

print(inputval)
Filename = inputval.split(":")
print (Filename[0])
print (Filename[1])

