// Implements a dictionary's functionality

#include <stdbool.h>
#include <string.h>
#include <stdio.h>
#include <stdlib.h>

#include "dictionary.h"

node *hashtable[50];
int const BUZZ_SIZE = 50;

int words = 0;

// Returns true if word is in dictionary else false
bool check(const char *word)
{
    printf ("Here is the word: %s\n",word);
    // if (word[0] == 'c')
    // {
    //     printf ("Here is the good word: %s\n",word);
    // }
    // else if ( word[0] == 'c' && word[1]=='a'  && word[4]=='r' )
    // {
    //     printf ("Here is the bad word: ");
    //     return false;
    //}
    // TODO
    return true;
}

// Loads dictionary into memory, returning true if successful else false
bool load(const char *dictionary)
{
    //open dictionary file

    // in a while loop read one word at a time deliminated by "\n"
    //  read words into buffer
    //      a hashtable assigns index to node
    //      copy word into hashtable using index defined --> linked list
    //      we are creating a new node in linked list --> allocating memory each time
    //      when we add a new node it goes to the beginning of the list
    //          // new_node -> next = head;
                // head = new_node;

    printf ("Here is the dictionary: %s\n", dictionary);
    // TODO
    char buff[BUZZ_SIZE];
    FILE *f = fopen(dictionary, "r");

        if(f == NULL)
    {
        unload();
        return false;
    }

    while (fscanf(f, "%s", buff) != EOF)
    {
        //fgets(buff, BUZZ_SIZE, f);
        //printf("String read: %s\n", buff);

        node *node1 = malloc(sizeof(node));

        strcpy(node1->word, buff);
        printf("%s\n", node1->word);
        words++;

    }
    fclose(f);
    //myWord.next = &myWord;
    //&myWord.next = NULL;
    return true;
}

// Returns number of words in dictionary if loaded else 0 if not yet loaded
unsigned int size(void)
{
    // TODO
    return 0;
}

// Unloads dictionary from memory, returning true if successful else false
bool unload(void)
{
    // TODO
    // node *ptr = words;
    // (while ptr != null)
    // {
    //     node *next = ptr -> next;
    //     free(ptr);
    //     ptr = next;
    // }
    return true;
}

