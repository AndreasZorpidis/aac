class Graph {

    // Constructor 
    constructor(V) {
        this.V = V;     // No. of vertices
        this.adj = {};  // A dynamic list of adjacency lists
    }

    // function to add an edge to graph
    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
    }

    // Assigns colors (starting from 0) to all vertices and prints
    // the assignment of colors
    // Prints greedy coloring of the vertices
    greedyColoring() {
        var result = []; // No need to initialize the length of the array with this.V

        // Assign the first color to first vertex
        result[0] = 0;

        // Initialize remaining V-1 vertices as unassigned
        for (var u = 1; u < this.V; u++) {
            result[u] = -1; // no color is assigned to u
        }

        // A temporary array to store the available colors. True
        // value of available[cr] would mean that the color cr is
        // assigned to one of its adjacent vertices
        var available = [];
        for (var cr = 0; cr < this.V; cr++) {
            available[cr] = true;
        }

        // Assign colors to remaining V-1 vertices
        for (var u = 1; u < this.V; u++) {




            // Process all adjacent vertices and flag their colors
            // as unavailable
            list<int>:: iterator i;
            for (i = adj[u].begin(); i != adj[u].end(); ++i) {
                if (result[* i] != -1) {
                    available[result[* i]] = false;
                }
            }



            // Find the first available color
            var cr;
            for (cr = 0; cr < this, V; cr++) {
                if (available[cr]) {
                    break;
                }
            }

            result[u] = cr; // Assign the found color
        
            // Reset the values back to true for the next iteration
            for (i = adj[u].begin(); i != adj[u].end(); ++i) {
                if (result[* i] != -1) {
                    available[result[* i]] = true;
                }
            }






        }

        // print the result
        for (var u = 0; u < this.V; u++) {
            console.log("Vertex " + u + " --->  Color " + result[u]);
        }
    }


}


var g1 = new Graph(5);
g1.addEdge(0, 1);
g1.addEdge(0, 2);
g1.addEdge(1, 2);
g1.addEdge(1, 3);
g1.addEdge(2, 3);
g1.addEdge(3, 4);
console.log("Coloring of graph 1");
g1.greedyColoring();

var g2 = new Graph(5);
g2.addEdge(0, 1);
g2.addEdge(0, 2);
g2.addEdge(1, 2);
g2.addEdge(1, 4);
g2.addEdge(2, 4);
g2.addEdge(4, 3);
console.log("Coloring of graph 2");
g2.greedyColoring();


/*
Coloring of graph 1
Vertex 0 --->  Color 0
Vertex 1 --->  Color 1
Vertex 2 --->  Color 2
Vertex 3 --->  Color 0
Vertex 4 --->  Color 1

Coloring of graph 2
Vertex 0 --->  Color 0
Vertex 1 --->  Color 1
Vertex 2 --->  Color 2
Vertex 3 --->  Color 0
Vertex 4 --->  Color 3
*/