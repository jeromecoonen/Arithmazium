# main.py
import sys

if __name__ == "__main__":
    print("Arguments count: {:d}".format(len(sys.argv)))
    for i, arg in enumerate(sys.argv):
        print("Argument {:d}: {:s}".format(i, arg))

