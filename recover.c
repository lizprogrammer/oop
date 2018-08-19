#include <stdio.h>
#include <stdlib.h>


FILE* openFile(char* myFile);
int readFile(FILE* myFile);
int isStart(unsigned char* buffer);
int openNewJpg(void);
int writeJpg(void);
int isEndOfFile(void);
int closeFiles(FILE* myFile);
#define BUFFER_SIZE 512


int main(int numOfArguments, char* argValues[])
{

	if(numOfArguments != 2)
		return 1;
    
	//printf("Hello world\n");

	char* f = argValues[1];
	//openFile(f);

	FILE* aFile = openFile(f);
	readFile(aFile);

	closeFiles(aFile);

	//isStart((unsigned char*) f);

	return 0;


}


FILE* openFile(char* myFile){

		char* file = myFile; //create a pointer for the file name string named file
        FILE* card = fopen(file,"r");

	    if(!card) //check if file exist
        {
            fprintf(stderr, "Nada.  Zip.  Zilch.\n");
            return card;
        }

	//printf("Hello openFile\n");

	return card;

}
int readFile(FILE* card){

		//keep count
        int imgcount = 0;
        int jpgFound = 0;
        FILE* picture = NULL;


        //define buffer
        unsigned char* buffer;

    	while(fread(buffer, 512, 1, card) == 1)
   		{
   			jpgFound = isStart(buffer);
        	imgcount += isStart(buffer);

        	char filename[8];
            //sprintf(filename, "%03d.jpg", filecount);
            picture = fopen(filename, "a");
            //filecount++;

    while (fread(buffer, BUFFER_SIZE, 1, input) == 1)
    {
        	if (jpgFound == 1)
   
            {
                // We found the start of a new pic so close out current picture
                fclose(picture);
            }
            else
            {
                // jpg discovered and now we have the green light to write
                jpgFound = 1;
            }
 
 			printf("%i\n", jpgFound);       		
            // write 512 bytes to file once we start finding jpgs
            fwrite(&buffer, BUFFER_SIZE, 1, picture);

        }	

    }    
        printf("Total number of jpeg files: %i\n", imgcount);

        return 0;

}
int isStart(unsigned char* buffer){

	//printf("Hello isStart\n");
	int imgcount = 0;

  		if(buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff && (buffer[3] & 0xf0) == 0xe0)
  		//if this a jpg
   		{
  			imgcount = 1; 
      		//printf("Found an image%i\n", imgcount);
   		}
	
	return imgcount;	
}

int closeFiles(FILE* card){
	    // close files
	//printf("Closing\n");
    fclose(card);
    return 0;
}
