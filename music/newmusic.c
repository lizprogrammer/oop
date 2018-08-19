    // Helper functions for music

    #include <string.h>
    #include <stdio.h>
    #include <math.h>
    #include <ctype.h>

    double frequency(char note, char sharp, char octave);	

    int main(void){

	double f = 0;
	f = frequency('A', ' ',  '4');
	printf("%lf\n", f);
	return 0;
    }


    // Calculates frequency (in Hz) of a note
    double frequency(char note, char sharp, char octave)
    {
	double n = 0;
	double freq = 0;	
	
	//notes
	char notes[12];
	notes[0] = 'A';
	notes[1] = '#';
	notes[2] = 'B';
	notes[3] = 'C';
	notes[4] = '#';
	notes[5] = 'D';
	notes[6] = '#';
	notes[7] = 'E';
	notes[8] = 'F';
	notes[9] = '#';
	notes[10] = 'G';
	notes[11] = '#';

	
	// if octave is greater than 4 make it positive and multiply

	if(octave - '0' >= 4 && note <= 'B')
	{
		for(int i = 0; i < sizeof(notes); i++)
		{
			if(notes[i] == note)
			{
				n = i;
			}		
		}	
	} 
	else
	{
		for(int i = 0, j = sizeof(notes); j > 0; i++,j--)
		{
			if(notes[j] == note)
			{
				n = -i;
				printf("%lf\n",n);
				printf("%c\n",octave);
			}
		}	
	}
	
	freq = pow(2,(n/12))*440;
	return freq;
    }

