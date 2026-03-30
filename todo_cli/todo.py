
#!/usr/bin/env python3
import json, os, sys
FILE='tasks.json'

def load():
    if not os.path.exists(FILE): return []
    return json.load(open(FILE))

def save(tasks): json.dump(tasks, open(FILE,'w'), indent=2)

def main():
    tasks=load()
    if len(sys.argv)<2:
        print("Usage: todo.py [add/list/done]");return
    cmd=sys.argv[1]
    if cmd=='add':
        task=" ".join(sys.argv[2:]); tasks.append({'task':task,'done':False}); save(tasks); print('Added')
    elif cmd=='list':
        for i,t in enumerate(tasks): print(i, '[x]' if t['done'] else '[ ]', t['task'])
    elif cmd=='done':
        idx=int(sys.argv[2]); tasks[idx]['done']=True; save(tasks); print('Marked done')

if __name__=='__main__': main()
