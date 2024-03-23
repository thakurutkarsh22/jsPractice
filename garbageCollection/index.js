// link: https://v8.dev/blog/trash-talk

/*
The Young Generation:

The young generation is where newly created objects reside. It is divided into two semi-spaces: the “from” space and the “to” space. Only one of these spaces is active at any given time, while the other remains empty.

When the active semi-space becomes full, a minor garbage collection occurs. During this process, the garbage collector scans the active semi-space for live objects, which are objects still in use by the application. These live objects are then copied to the empty semi-space, and any remaining objects are considered garbage and are deallocated.

Once the live objects have been moved, the roles of the two semi-spaces are switched. The previously empty semi-space becomes the active space, and the process starts anew.

The Old Generation:

When an object survives multiple minor garbage collections, it is considered tenured and is promoted to the old generation. The old generation is garbage collected during a major garbage collection, also known as a full GC.
During a major garbage collection, the garbage collector scans the entire heap, identifying live objects and marking them as such. It then sweeps through the heap, deallocating any unmarked objects and freeing up memory.
Major garbage collections are more expensive in terms of performance compared to minor garbage collections, as they require scanning the entire heap. As such, they occur less frequently.


*/

/*
Optimizing Node.js Garbage Collection
To ensure optimal performance in your Node.js applications, it’s essential to understand and optimize garbage collection. Here are some best practices to follow:

1. Monitor Memory Usage
Keep an eye on your application’s memory usage. Tools like process.memoryUsage() can provide valuable insights into how your application is consuming memory. Regularly profiling your application’s memory usage can help you identify memory leaks and optimize garbage collection.

2. Use Efficient Data Structures
Using efficient data structures can help reduce memory overhead and improve garbage collection efficiency. For example, consider using Typed Arrays instead of regular JavaScript arrays for large datasets, as they consume less memory.

3. Limit the Use of Global Variables
Minimizing the use of global variables can help reduce the amount of memory held by your application. Since global variables are never deallocated, they can contribute to memory leaks and increase the pressure on garbage collection.

4. Leverage WeakRef and FinalizationRegistry
Introduced in ECMAScript 2021, the WeakRef and FinalizationRegistry APIs can help you create weak references to objects and register cleanup callbacks, respectively. These APIs can be used to manage resources more efficiently and optimize garbage collection in your Node.js applications.

*/
